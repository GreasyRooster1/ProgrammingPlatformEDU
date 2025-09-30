import React from 'react';
import styles from "./lessonPanel.module.css";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import CodePanel from "../code/CodePanel.jsx";
import CodeBlock from "../../../../components/CodeBlock.jsx";
import Markdown from "../../../../components/Markdown.jsx";

const textComponent = {
    func:(data)=>{
        return (<p>{data.text}</p>)
    },
    type:"text"
}

const titleComponent = {
    func:(data)=>{
        return (<MedTitle className={styles.title}>{data.text}</MedTitle>)
    },
    type:"text"
}

function LessonPanel() {
    let components = [
        textComponent,
        titleComponent,
    ]

    return (
        <div className={styles.lesson}>
        </div>
    );
}

export default LessonPanel;