import React, {useEffect, useState} from 'react';
import TextBox from "../../../../../components/form/TextBox.jsx";

function EditableText(props) {
    const [text, setText] = useState(props.component.text??"");

    useEffect(() => {
        props.updateComponent({
            text: text,
        })
    },[text])


    return (
        <>
            <TextBox placeholder={"type some content..."} value={text} setValue={setText}></TextBox>
        </>
    );
}

export default EditableText;