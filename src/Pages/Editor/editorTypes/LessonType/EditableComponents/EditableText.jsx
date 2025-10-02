import React, {useEffect, useState} from 'react';
import TextBox from "../../../../../components/TextBox.jsx";

function EditableText(props) {
    const [text, setText] = useState(""); {}

    useEffect(() => {
        props.setComponentData({
            text: text,
            ...props.component,
        })
    },[text])

    return (
        <>
            <span>Text</span>
            <TextBox placeholder={"type some content..."} setValue={setText}></TextBox>
        </>
    );
}

export default EditableText;