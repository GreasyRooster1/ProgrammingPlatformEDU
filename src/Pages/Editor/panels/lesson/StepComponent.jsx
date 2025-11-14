import React from 'react';
import styles from "./stepComponent.module.css"
import TitleComponent from "./components/TitleComponent.jsx";
import TextComponent from "./components/TextComponent.jsx";
import CodeComponent from "./components/CodeComponent.jsx";
import HintComponent from "./components/HintComponent.jsx";

function StepComponent(props) {

    const components = props.components??{
        "title":(<TitleComponent />),
        "text":(<TextComponent />),
        "code":(<CodeComponent />),
        "hint":(<HintComponent />),
    }

    let type = props.type?props.type:props.component.type

    return (
        components[type] && React.cloneElement(components[type],{
            ...props,
            component:props.component
        })
    );
}

export default StepComponent;