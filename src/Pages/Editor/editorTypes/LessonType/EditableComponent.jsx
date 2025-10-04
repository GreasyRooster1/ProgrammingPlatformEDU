import React, {useEffect, useState} from 'react';
import styles from "./editableComponent.module.css"
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";
import Dropdown from "../../../../components/Form/Dropdown.jsx";

function EditableComponent(props) {
    const [componentData,setComponentData] = useState(props.component);

    useEffect(() => {
        let newStepData = {...props.stepData};

        newStepData.components[props.index] = componentData;
        props.setStepData(newStepData);
    },[componentData])

    useEffect(() => {
        setComponentData(props.component);
    },[props.component])

    const onDropdownChange = (e) => {
        setComponentData({
            ...componentData,
            type: e.target.value.toLowerCase(),
        });
    }

    const components = {
        "text":<EditableText setComponentData={setComponentData} />,
        "title":<EditableText setComponentData={setComponentData}/>
    }

    const types=[
        "text",
        "title",
        "code",
        "image",
        "hint",
    ]

    return (
        <div className={styles.editableStep}>
            <Dropdown options={types} onChange={onDropdownChange} value={componentData.type}/>
            <StepComponent stepData={props.stepData} component={componentData} components={components} />
        </div>
    );
}

export default EditableComponent;