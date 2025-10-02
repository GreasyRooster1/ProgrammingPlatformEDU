import React from 'react';
import style from './stepPreview.module.css'
import StepComponent from "../../panels/lesson/StepComponent.jsx";

function StepPreview(props) {
    return (
        <>
        {
            props.stepData.components.map((component, index) => (
                <StepComponent key={index} component={component} />
            ))
        }
        </>
    );
}

export default StepPreview;