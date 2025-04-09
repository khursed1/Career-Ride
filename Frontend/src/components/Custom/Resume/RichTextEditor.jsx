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
const BtnAlignCenter = createButton('Align center', '≡', 'justifyCenter');

export default function CustomEditor() {
    const [value, setValue] = useState('simple text');

    function onChange(e) {
        setValue(e.target.value);
    }

    return (
        <Editor value={value} onChange={onChange}>
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
    );
}