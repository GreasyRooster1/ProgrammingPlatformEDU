import React, {useEffect} from 'react';
import {Editor, useMonaco} from "@monaco-editor/react";

function CodePanel(props) {
    let monaco = useMonaco();

    let callbacks = props.callbacks??{};

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
            height="100vh"
            defaultLanguage={props.defaultLanguage??"javascript"}
            defaultValue="// some comment"
            value={props.value}

            onMount={callbacks.onMount}
            onChange={callbacks.onChange}
            beforeMount={callbacks.beforeMount}
        />
    );
}

export default CodePanel;