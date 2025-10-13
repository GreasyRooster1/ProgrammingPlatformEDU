import React, {useEffect, useState} from 'react';
import TextBox from "../../../../../components/form/TextBox.jsx";

function EditableText(props) {
    const [text, setText] = useState(props.component.text??"");
    const [title, setTitle] = useState(props.component.title??"");

    useEffect(() => {
        props.setComponentData({
            ...props.component,
            text: text,
        })
    },[text])
    useEffect(() => {
        props.setComponentData({
            ...props.component,
            title: title,
        })
    },[title])

    useEffect(() => {
        setText(props.component.text??"");
        setTitle(props.component.title??"");
    },[props.stepData]);


    return (
        <>
            <TextBox placeholder={"type some content..."} value={title} setValue={setTitle}></TextBox>
            <TextBox placeholder={"type some content..."} value={text} setValue={setText}></TextBox>
        </>
    );
}

export default EditableText;