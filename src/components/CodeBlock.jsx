import React from 'react';
import styles from "./codeBlock.module.css"
import {Editor} from "@monaco-editor/react";

function CodeBlock(props) {
    return (
        <div>
            <Editor
                defaultLanguage="javascript"
                defaultValue="// some comment"
            />
        </div>
    );
}

export default CodeBlock;