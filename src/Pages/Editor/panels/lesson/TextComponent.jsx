import React from 'react';
import MedTitle from "../../../../components/text/MedTitle.jsx";

function TitleComponent(props) {
    return (
        <span>{props.component.text}</span>
    );
}

export default TitleComponent;