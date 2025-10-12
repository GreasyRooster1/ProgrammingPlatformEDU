import React from 'react';
import styles from "./stepComponent.module.css"
import TitleComponent from "./TitleComponent.jsx";
import TextComponent from "./TextComponent.jsx";
import CodeComponent from "./CodeComponent.jsx";
import HintComponent from "./HintComponent.jsx";

function StepComponent(props) {

    const components = props.components??{
        "title":(<TitleComponent />),
        "text":(<TextComponent />),
        "code":(<CodeComponent />),
        "hint":(<HintComponent />),
    }

    return (
        components[props.component.type] && React.cloneElement(components[props.component.type],{
            ...props,
            component:props.component
        })
    );
}

export default StepComponent;