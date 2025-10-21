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

    const deselectClickHandle = (event)=>{
        if(event.target===event.currentTarget){
            setSelectedComponent(null);
            props.setStepData({
                ...props.stepData,
                components: props.components,
            });
        }
    }

    const addComponent = ()=>{
        setSelectedComponent(null);
        props.setComponents([
            ...props.components,
            {
                type:"text",
                text:"type some text content..."
            }
        ]);
    }

    const updateComponent = (index,data)=>{
        let newComponents = props.components;
        newComponents[index] = data;
        props.setComponents(newComponents);
        console.log("component update",index,props.components,newComponents,data);
    }

    if(!props.components){
        return (
            <div className={styles.selectPrompt}>
                <MedTitle>Select A Step...</MedTitle>
            </div>
        )
    }

    return (
        <div className={styles.editor} onClick={deselectClickHandle}>
            <div className={styles.preview}>
                {
                    props.components.map((component, index) => (
                        <div className={`${styles.component} ${selectedComponent===index?styles.selected:styles.unselected}`} onClick={()=>{clickHandle(index)}}>
                            {selectedComponent===index?
                                <EditableComponent
                                    key={index}
                                    index={index}
                                    component={component}
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