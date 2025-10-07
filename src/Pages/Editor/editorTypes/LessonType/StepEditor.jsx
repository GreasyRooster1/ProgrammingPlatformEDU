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

    const deselectClickHandle = (event)=>{
        if(event.target===event.currentTarget && props.hideCallback!==undefined){
            setSelectedComponent(null);
        }
    }

    return (
        <div className={styles.editor} onClick={deselectClickHandle}>
            {
                <div className={styles.preview}>
                    {
                        props.stepData.components.map((component, index) => (
                            <div className={`${styles.component} ${selectedComponent===index?styles.selected:styles.unselected}`} onClick={()=>{clickHandle(index)}}>
                                {selectedComponent===index?
                                    <EditableComponent
                                        key={index}
                                        index={index}
                                        component={component}
                                        stepData={props.stepData}
                                        setStepData={props.setStepData}
                                        selectedStep={props.selectedStep}
                                    />:
                                    <StepComponent key={index} component={component}/>
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