import React, {useEffect, useState} from 'react';
import TextBox from "../../../../../components/TextBox.jsx";

function EditableText(props) {
    const [text, setText] = useState(props.component.text);

    useEffect(() => {
        props.setComponentData({
            ...props.component,
            text: text,
        })
    },[text])

    useEffect(() => {
        setText(props.component.text);
    },[props.stepData]);


    return (
        <>
            <span>{
                props.component.type==="text"?"Text":"Title"
            }</span>
            <TextBox placeholder={"type some content..."} value={text} setValue={setText}></TextBox>
        </>
    );
}

export default EditableText;