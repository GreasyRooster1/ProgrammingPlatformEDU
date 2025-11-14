import React from 'react';
import MedTitle from "../../../../../components/text/MedTitle.jsx";
import LessonMarkdown from "../../../../../components/LessonMarkdown.jsx";

function TitleComponent(props) {
    return (
        <LessonMarkdown content={props.component.text}></LessonMarkdown>
    );
}

export default TitleComponent;