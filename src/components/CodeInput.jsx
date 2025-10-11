import React from 'react';
import {Editor} from "@monaco-editor/react";

import styles from "./codeInput.module.css"

function CodeInput(props) {
    const handleEditorChange = (value, event) => {
        props.setValue(value);
    }

    return (
        <Editor
            className={styles.editor}
            language={props.language}
            onChange={handleEditorChange}
            value={props.value}
        />
    );
}

export default CodeInput;