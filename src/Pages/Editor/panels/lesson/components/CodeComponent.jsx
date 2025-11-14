import React from 'react';
import CodeBlock from "../../../../../components/CodeBlock.jsx";

function CodeComponent(props) {
    return (
        <CodeBlock
            added={props.component.added??[]}
            removed={props.component.removed??[]}
            language={props.component.language}
        >
            {props.component.code}
        </CodeBlock>
    );
}

export default CodeComponent;