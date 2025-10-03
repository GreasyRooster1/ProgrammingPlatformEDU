import React, {useEffect, useState} from 'react';
import TextBox from "../../../../../components/TextBox.jsx";

function EditableText(props) {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log(text)
        props.setComponentData({
            ...props.component,
            text: text,
        })
        console.log({
            ...props.component,
            text: text,
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