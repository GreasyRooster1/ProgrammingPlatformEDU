import React, {useEffect} from 'react';
import {Editor, useMonaco} from "@monaco-editor/react";

function MonacoDefault(props) {
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
        <Editor
            theme="brand-default"
            {...props}
        />
    );
}

export default MonacoDefault;