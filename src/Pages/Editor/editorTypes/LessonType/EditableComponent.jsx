import React, {useEffect, useState} from 'react';
import styles from "./editableComponent.module.css"
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";

function EditableComponent(props) {
    const [componentData,setComponentData] = useState(props.component);

    useEffect(() => {
        let newStepData = {...props.stepData};

        console.log(componentData);
        newStepData.components[props.index] = componentData;
        props.setStepData(newStepData);
    },[componentData])

    const components = {
        "text":<EditableText setComponentData={setComponentData} />,
        "title":<EditableText setComponentData={setComponentData}/>
    }

    return (
        <div className={styles.editableStep}>
            <StepComponent key={props.selectedStep} component={componentData} components={components} />
        </div>
    );
}

export default EditableComponent;