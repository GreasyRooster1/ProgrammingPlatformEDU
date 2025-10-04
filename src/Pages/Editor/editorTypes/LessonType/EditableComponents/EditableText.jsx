import React, {useEffect, useState} from 'react';
import TextBox from "../../../../../components/TextBox.jsx";

function EditableText(props) {
    const [text, setText] = useState(props.component.text);



    useEffect(() => {
        console.log("text change",props.component)
        setText(props.component.text);
    },[props.selectedStep]);

    useEffect(() => {
        props.setComponentData({
            ...props.component,
            text: text,
        })
    },[text])

    return (
        <>
            <span>Text</span>
            <TextBox placeholder={"type some content..."} value={text} setValue={setText}></TextBox>
        </>
    );
}

export default EditableText;