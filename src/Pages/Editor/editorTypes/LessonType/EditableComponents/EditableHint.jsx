import React, {useEffect, useState} from 'react';
import TextBox from "../../../../../components/form/TextBox.jsx";

function EditableHint(props) {
    const [text, setText] = useState(props.component.text??"");
    const [title, setTitle] = useState(props.component.title??"");

    useEffect(() => {
        props.setComponent({
            ...props.component,
            text: text,
        })
    },[text])
    useEffect(() => {
        props.setComponent({
            ...props.component,
            title: title,
        })
    },[title])



    return (
        <>
            <TextBox placeholder={"type some content..."} value={title} setValue={setTitle}></TextBox>
            <TextBox placeholder={"type some content..."} value={text} setValue={setText}></TextBox>
        </>
    );
}

export default EditableHint;