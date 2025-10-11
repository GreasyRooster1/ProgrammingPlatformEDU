import React from 'react';
import {Editor} from "@monaco-editor/react";

function CodeInput(props) {
    const  handleEditorChange = (value, event) => {
        props.setValue(value);
    }

    return (
        <Editor
            language={props.language}
            defaultValue={props.defaultValue}
            onChange={handleEditorChange}
        />
    );
}

export default CodeInput;