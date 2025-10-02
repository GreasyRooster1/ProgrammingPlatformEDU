import React from 'react';
import styles from "./stepComponent.module.css"

function StepComponent(props) {

    let components = {
        "title":(<TitleComponent />),
        "text":(<TextComponent />),
    }

    return (
        components[props.component.type]
    );
}

export default StepComponent;