import React from 'react';
import styles from "./lessonPanel.module.css";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import CodePanel from "../code/CodePanel.jsx";
import CodeBlock from "../../../../components/CodeBlock.jsx";

function LessonPanel() {
    return (
        <div className={styles.lesson}>
            <MedTitle className={styles.title}>
                Title
            </MedTitle>
            <div className={styles.textDescription}>
                test desc
            </div>
            <CodeBlock added={[3    ]} removed={[2]} >
{`let x
x=10
y=10
f(x);`}
            </CodeBlock>
        </div>
    );
}

export default LessonPanel;