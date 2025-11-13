import React, {useEffect, useState} from 'react';
import TextBox from "../../../../../components/form/TextBox.jsx";
import {TextArea} from "@radix-ui/themes";

function EditableHint(props) {
    const [text, setText] = useState(props.component.text??"");
    const [title, setTitle] = useState(props.component.title??"");

    useEffect(() => {
        props.updateComponent({
            text: text,
        })
    },[text])
    useEffect(() => {
        props.updateComponent({
            title: title,
        })
    },[title])

    const handleChange = (event) => {
        setText(event.target.value);
    };


    return (
        <>
            <TextArea value={title} onChange={(e)=>setTitle(e.target.value)} resize="vertical"></TextArea>
            <TextArea value={text} onChange={(e)=>setText(e.target.value)} resize="vertical"></TextArea>
        </>
    );
}

export default EditableHint;