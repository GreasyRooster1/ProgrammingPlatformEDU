import React, {useState} from 'react';
import TextBox from "../../../../../components/TextBox.jsx";

function EditableText(props) {
    const [text, setText] = useState(""); {}

    return (
        <>
            <span>Text</span>
            <TextBox placeholder={"type some content..."} setValue={setText}></TextBox>
        </>
    );
}

export default EditableText;