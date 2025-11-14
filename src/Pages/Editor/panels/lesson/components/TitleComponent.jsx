import React from 'react';
import MedTitle from "../../../../../components/text/MedTitle.jsx";

function TitleComponent(props) {
    return (
        <MedTitle>{props.component.text}</MedTitle>
    );
}

export default TitleComponent;