import React, {useEffect, useState} from 'react';
import styles from './stepEditor.module.css'
import MedTitle from "../../../../components/text/MedTitle.jsx";
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableComponent from "./EditableComponent.jsx";

function StepEditor(props) {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const clickHandle = (index)=>{
        setSelectedComponent(index);
    }

    if(!props.stepData){
        return (
            <div className={styles.selectPrompt}>
                <MedTitle>Select A Step...</MedTitle>
            </div>
        )
    }

    return (
        <div className={styles.editor}>
            {
                <div className={styles.preview}>
                    {
                        props.stepData.components.map((component, index) => (
                            <div className={styles.component} onClick={()=>{clickHandle(index)}}>
                                {selectedComponent===index?
                                    <StepComponent key={index} component={component}/>:
                                    <EditableComponent
                                        key={index}
                                        index={index}
                                        component={component}
                                        stepData={props.stepData}
                                        setStepData={props.setStepData}
                                        selectedStep={props.selectedStep}
                                    />
                                }
                            </div>
                        ))
                    }
                </div>
            }
            <div className={styles.addButton}>
                +
            </div>
        </div>
    );
}

export default StepEditor;