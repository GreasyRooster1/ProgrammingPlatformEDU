import React from 'react';
import styles from "./editableComponent.module.css"
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";

function EditableComponent(props) {
    const components = {
        "text":<EditableText component={props.component}/>
    }

    return (
        <div className={styles.editableStep}>
            <StepComponent />
        </div>
    );
}

export default EditableComponent;