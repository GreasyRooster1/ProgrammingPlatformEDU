import React, {useEffect, useState} from 'react';
import styles from './stepEditor.module.css'
import MedTitle from "../../../../components/text/MedTitle.jsx";
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableComponent from "./EditableComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";
import EditableCode from "./EditableComponents/EditableCode.jsx";
import EditableHint from "./EditableComponents/EditableHint.jsx";

function StepEditor(props) {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const clickHandle = (index)=>{
        if(selectedComponent!==index) {
            setSelectedComponent(index);
        }
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

    const setComponent = (index,data)=>{
        let newComponents = [...props.components];
        newComponents[index] = {...data};
        props.setComponents([...newComponents]);
    }

    const updateComponent = (index,data)=>{
        props.setComponents((components) => {
            let newComponents = [...components];
            newComponents[index] = {
                ...components[index],
                ...data,
            }
            return newComponents;
        });
    }

    const deleteComponent = (index) => {
        let components = [...props.components];

        components.splice(index,1);
        props.setComponents(components);
        setSelectedComponent(null);
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
                        <div key={index} className={`${styles.component} ${selectedComponent===index?styles.selected:styles.unselected}`} onClick={()=>{clickHandle(index)}}>
                            {selectedComponent===index?
                                <EditableComponent
                                    key={index}
                                    index={index}
                                    component={component}
                                    updateComponent={(data)=>updateComponent(index,data)}
                                    setComponent={(data)=>setComponent(index,data)}
                                    selectedStep={props.selectedStep}
                                    delete={()=>deleteComponent(index)}
                                />:
                                <StepComponent key={index} component={component} isEditor={true} />
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