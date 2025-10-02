import React from 'react';
import styles from "./editableComponent.module.css"
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";

function EditableComponent(props) {

    const components = {
        "text":<EditableText />,
        "title":<EditableText />
    }

    return (
        <div className={styles.editableStep}>
            <StepComponent component={props.component} components={components} />
        </div>
    );
}

export default EditableComponent;