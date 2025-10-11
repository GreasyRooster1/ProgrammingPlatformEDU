import React, {useEffect} from 'react';
import {Editor, useMonaco} from "@monaco-editor/react";
import MonacoDefault from "../../../../components/MonacoDefault.jsx";

function CodePanel(props) {
    let monaco = useMonaco();

    let callbacks = props.callbacks??{};
    return (
        <MonacoDefault
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