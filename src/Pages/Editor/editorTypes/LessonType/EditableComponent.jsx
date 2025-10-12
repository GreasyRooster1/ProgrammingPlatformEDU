import React, {useEffect, useState} from 'react';
import styles from "./editableComponent.module.css"
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";
import Dropdown from "../../../../components/Form/Dropdown.jsx";
import LinkButton from "../../../../components/buttons/LinkButton.jsx";
import trashIcon from "../../../../icons/TrashIcon.svg";
import EditableCode from "./EditableComponents/EditableCode.jsx";

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

    const deleteComponent = () => {
        let newStepData = {...props.stepData};

        newStepData.components.splice(props.index,1);
        props.setStepData(newStepData);
    }

    const components = {
        "text":<EditableText/>,
        "title":<EditableText/>,
        "code":<EditableCode/>
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
            <div className={styles.topBar}>
                <Dropdown options={types} onChange={onDropdownChange} value={componentData.type}/>
                <LinkButton icon={trashIcon} onClick={deleteComponent}>Delete</LinkButton>
            </div>
            <StepComponent stepData={props.stepData} component={componentData} components={components} setComponentData={setComponentData}/>
        </div>
    );
}

export default EditableComponent;