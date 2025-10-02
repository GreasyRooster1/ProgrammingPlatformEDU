import React from 'react';
import TextBox from "../../../../../components/TextBox.jsx";

function EditableText(props) {
    return (
        <>
            <span>Text</span>
            <TextBox placeholder={"type some content..."}></TextBox>
        </>
    );
}

export default EditableText;