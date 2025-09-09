import React from 'react';
import styles from "./codeBlock.module.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock(props) {
    let diffFunc = lineNumber => {
        let style = {
            display: 'block',
        };
        if (props.removed.includes(lineNumber)) {
            style.backgroundColor = 'rgba(232,25,25,0.35)';
            style["text-decoration"]= "line-through 3px";
            style["text-decoration-color"]= "rgba(103,0,0,0.69)";
        }else if (!props.added.includes(lineNumber)) {
            style.opacity = '0.4';
        }
        return { style };
    }

    return (
        <>
            <style>
                {`.react-syntax-highlighter-line-number{
                    display: none !important;
                }`}
            </style>
            <SyntaxHighlighter
                language="javascript"
                style={vs2015}
                className={styles.editor}
                wrapLines={true}
                showLineNumbers={true}
                lineProps={diffFunc}
            >
                {props.children}
            </SyntaxHighlighter>
        </>
    );
}

export default CodeBlock;