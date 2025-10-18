import React, {useEffect, useState} from 'react';
import styles from './stepEditor.module.css'
import MedTitle from "../../../../components/text/MedTitle.jsx";
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableComponent from "./EditableComponent.jsx";

function StepEditor(props) {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [components, setComponents] = useState(null);

    const clickHandle = (index)=>{
        setSelectedComponent(index);
    }

    useEffect(() => {
        if(!props.stepData){return;}
        setComponents(props.stepData.components);
    },[props.stepData]);

    if(!components){
        return (
            <div className={styles.selectPrompt}>
                <MedTitle>Select A Step...</MedTitle>
            </div>
        )
    }

    const deselectClickHandle = (event)=>{
        if(event.target===event.currentTarget){
            setSelectedComponent(null);
            props.setStepData({
                ...props.stepData,
                components: components,
            });
        }
    }

    const addComponent = ()=>{
        setSelectedComponent(null);
        let newComponents = components;
        newComponents.push({
            type:"text",
            text:"type some text content..."
        });
        setComponents(newComponents);
        props.setStepData({
            ...props.stepData,
            components
        })
    }

    const updateComponent = (index,data)=>{
        let newComponents = components;
        newComponents[index].components = data;
        setComponents(newComponents);
    }

    return (
        <div className={styles.editor} onClick={deselectClickHandle}>
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
                                    setComponent={(data)=>updateComponent(index,data)}
                                    selectedStep={props.selectedStep}
                                />:
                                <StepComponent key={index} component={component} isEditor={true}/>
                            }
                        </div>
                    ))
                }
            </div>
            <div className={styles.addButton} onClick={addComponent}>
                +
            </div>
        </div>
    );
}

export default StepEditor;