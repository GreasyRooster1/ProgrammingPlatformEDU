import React, {useEffect, useState} from 'react';
import {TextArea} from "@radix-ui/themes";

function EditableText(props) {
    const [text, setText] = useState(props.component.text??"");

    useEffect(() => {
        props.updateComponent({
            text: text,
        })
    },[text])


    return (
        <>
            <TextArea variant="surface" size="3" placeholder={"type some content..."} value={text} setValue={setText}></TextArea>
        </>
    );
}

export default EditableText;