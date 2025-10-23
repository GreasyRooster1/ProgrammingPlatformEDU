import React, {useEffect, useState} from 'react';
import styles from "./editableComponent.module.css"
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";
import Dropdown from "../../../../components/Form/Dropdown.jsx";
import LinkButton from "../../../../components/buttons/LinkButton.jsx";
import trashIcon from "../../../../icons/TrashIcon.svg";
import EditableCode from "./EditableComponents/EditableCode.jsx";
import EditableHint from "./EditableComponents/EditableHint.jsx";

function EditableComponent(props) {
    const [type, setType] = useState(props.component.type??"text");

    useEffect(() => {
        props.setComponent({
            ...props.component,
            type: type,
        });
        console.log("type", props.component.type,type,);
    },[type])

    const onDropdownChange = (e) => {
        console.log("onDropdownChange", e.target.value.toLowerCase());
        setType(e.target.value.toLowerCase());
    }

    const componentsList = {
        "text":<EditableText/>,
        "title":<EditableText/>,
        "code":<EditableCode/>,
        "hint":<EditableHint/>
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
                <Dropdown options={types} onChange={onDropdownChange} value={type}/>
                <LinkButton icon={trashIcon} onClick={props.delete}>Delete</LinkButton>
            </div>
            <StepComponent type={type} component={props.component} components={componentsList} setComponent={props.setComponent}/>
        </div>
    );
}

export default EditableComponent;