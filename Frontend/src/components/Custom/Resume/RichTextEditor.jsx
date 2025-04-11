{/* Text editor for adding text styles like bold, italic, 
                    bullet lists etc */}
import { useState } from 'react';
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
    const [value, setValue] = useState('simple text');

    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className=' text-xs'>Summary</label>
                <Button className="flex gap-2 text-sm border-primary text-primary" variant="outline" >
                    <Brain className='h-4 w-4' />Generate with AI</Button>
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