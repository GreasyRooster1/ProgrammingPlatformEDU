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

function LessonPanel(props) {
    let components = [
        textComponent,
        titleComponent,
    ]

    let lessonData = props.lessonData;
    let elements = [];

    for(let component of lessonData.components){
        for(let componentType of components){
            if(component.type===componentType.type){
                elements.push(componentType.func(component));
            }
        }
    }

    return (
        <div className={styles.lesson}>
            {elements}
        </div>
    );
}

export default LessonPanel;