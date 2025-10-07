import React from 'react';
import styles from "./stepComponent.module.css"
import TitleComponent from "./TitleComponent.jsx";
import TextComponent from "./TextComponent.jsx";

function StepComponent(props) {

    const components = props.components??{
        "title":(<TitleComponent />),
        "text":(<TextComponent />),
    }

    return (
        <div className={props.className}>
            {
                React.cloneElement(components[props.component.type],{
                    ...props,
                    component:props.component
                })
            }
        </div>
    );
}

export default StepComponent;