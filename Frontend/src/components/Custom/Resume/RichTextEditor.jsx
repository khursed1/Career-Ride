{/* Text editor for adding text styles like bold, italic, 
                    bullet lists etc */}
import { useState } from 'react';
import Editor, {
    BtnBold,
    BtnItalic,
    Toolbar
} from 'react-simple-wysiwyg';

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
            </Toolbar>
        </Editor>
    );
}