{/* Text editor for adding text styles like bold, italic, 
                    bullet lists etc */}
import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ai_api } from '../../../../Api';
const api_key = ai_api;
//Note api key is in API.jsx
const ai = new GoogleGenAI({ apiKey: api_key });
import Editor, {
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnUnderline,
    createButton,
    EditorProvider,
    Toolbar
} from 'react-simple-wysiwyg';
import { Button } from '../../ui/button';
import { Brain } from 'lucide-react';
const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');

export default function CustomEditor({ onRichTextEditorChange }) {
    const [aiLoading, setAiLoading] = useState(false);
    const [value, setValue] = useState('Add workexperience and refactor it with AI');
    const handleGenerateAI = async (e) => {
        e.preventDefault();
        setAiLoading(true);
        try {
            const result = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: `Please rewrite and improve this professional experience professionally: Note i will be using this response
        directly in my ai powered resume builder app, so dont include response like "here is the refactored ....." just give the response which can be directly pasted into summry section of resume 
        without any modification. Note also dont make it too long i want the resume to be ats friendly, also give only one answer not options in simple text \n${value}`,
            });
            const improvedContent = await result.candidates[0].content.parts[0].text;
            setValue(improvedContent)

        } catch (error) {
            console.error("AI Refactor Error:", error);
        } finally {
            setAiLoading(false);
        }
    };
    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className=' text-xs'>Summary</label>
                {/* <Button className="flex gap-2 text-sm border-primary text-primary" variant="outline" >
                    <Brain className='h-4 w-4' />Generate with AI</Button> */}
                <Button
                    className="flex gap-2 text-sm border-primary text-primary"
                    variant="outline"
                    onClick={handleGenerateAI}  // Trigger AI generation on button click
                    disabled={aiLoading}  // Disable the button when loading
                >
                    {aiLoading ? (
                        // Show loading spinner when request is in progress
                        <div className="flex items-center gap-2">
                            <span className="animate-spin">🔄</span> Generating...
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Brain className='h-4 w-4' /> Refactor with AI
                        </div>
                    )}
                </Button>
            </div>
            <Editor value={value} onChange={(e) => {
                setValue(e.target.value);
                onRichTextEditorChange(e);
            }}>
                <Toolbar>
                    <BtnBold />
                    <BtnItalic />
                    <BtnAlignCenter />
                    <BtnUnderline />
                    <BtnBulletList />
                    <BtnNumberedList />
                    <BtnLink />
                </Toolbar>
            </Editor>
        </div>
    );
}