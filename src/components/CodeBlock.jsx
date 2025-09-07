import React from 'react';
import styles from "./codeBlock.module.css"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeBlock(props) {
    return (
        <SyntaxHighlighter language="javascript" style={vs2015} className={styles.editor}>
            {props.children}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;