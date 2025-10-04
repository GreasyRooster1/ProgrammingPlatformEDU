import React, {useEffect, useState} from 'react';
import styles from "./editableComponent.module.css"
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";
import Dropdown from "../../../../components/Form/Dropdown.jsx";

function EditableComponent(props) {
    const [componentData,setComponentData] = useState(props.component);
    const [selectedType, setSelectedType] = useState(props.component.type);

    useEffect(() => {
        let newStepData = {...props.stepData};

        newStepData.components[props.index] = componentData;
        props.setStepData(newStepData);
    },[componentData])

    useEffect(() => {
        setComponentData(props.component);
        setSelectedType(props.component.type);
    },[props.component])

    useEffect(() => {
        setComponentData({
            ...props.component,
            type: selectedType,
        });
        console.log(componentData);
    },[selectedType])

    const onDropdownChange = (e) => {
        setSelectedType(e.target.value.toLowerCase());
        console.log(selectedType);
    }

    const components = {
        "text":<EditableText setComponentData={setComponentData} />,
        "title":<EditableText setComponentData={setComponentData}/>
    }

    const types=[
        "Text",
        "Title",
        "Code",
        "Image",
        "Hint",
    ]

    return (
        <div className={styles.editableStep}>
            <Dropdown options={types} onChange={onDropdownChange} value={selectedType}/>
            <StepComponent stepData={props.stepData} component={componentData} components={components} />
        </div>
    );
}

export default EditableComponent;