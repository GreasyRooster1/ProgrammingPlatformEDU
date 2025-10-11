import React from 'react';
import {Editor} from "@monaco-editor/react";

function CodeInput(props) {
    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);
    }

    return (
        <Editor
            height="90vh"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            onChange={handleEditorChange}
        />
    );
}

export default CodeInput;