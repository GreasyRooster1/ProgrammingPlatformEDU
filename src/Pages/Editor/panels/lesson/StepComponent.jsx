import React from 'react';
import styles from "./stepComponent.module.css"
import TitleComponent from "./TitleComponent.jsx";

function StepComponent(props) {

    const components = {
        "title":(<TitleComponent />),
        "text":(<TextComponent />),
    }

    return (
        React.cloneElement(components[props.component.type],{component:props.component})
    );
}

export default StepComponent;