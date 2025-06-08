import React, {useEffect} from 'react';
import {Editor, useMonaco} from "@monaco-editor/react";

function CodePanel() {
    let monaco = useMonaco();

    useEffect(() => {
        if(monaco) {
            console.log(monaco);
            monaco.editor.defineTheme('brand-default', {
                base: 'vs-dark',
                inherit: true,
                rules: [],
                colors: {
                    'editor.background': '#151516',
                },
            });
            monaco.editor.setTheme("brand-default")
        }
    },[monaco]);

    return (
        <Editor height="100vh" defaultLanguage="javascript" defaultValue="// some comment" />
    );
}

export default CodePanel;