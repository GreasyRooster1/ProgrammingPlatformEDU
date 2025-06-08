import React from 'react';
import {Editor} from "@monaco-editor/react";

function CodePanel() {
    return (
        <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
    );
}

export default CodePanel;