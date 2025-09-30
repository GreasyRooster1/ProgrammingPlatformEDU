import React from 'react';
import styles from "./lessonPanel.module.css";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import CodePanel from "../code/CodePanel.jsx";
import CodeBlock from "../../../../components/CodeBlock.jsx";
import Markdown from "../../../../components/Markdown.jsx";

function LessonPanel() {
    return (
        <div className={styles.lesson}>
            <MedTitle className={styles.title}>
                Title
            </MedTitle>
            <div className={styles.textDescription}>
                test desc
            </div>
            <CodeBlock added={[3,4]} removed={[2]} >
{`let x
//old line
// new lines
let x = 100;
f(x);`}
            </CodeBlock>
            <Markdown text={`
            hello world!
            # h1
            ## h2
            
            *bold*
            **italic**
            - list 1
            - list 2
            - list 3
            
            \`code()\`
            
            > quote
            ---
            `}>

            </Markdown>
        </div>
    );
}

export default LessonPanel;