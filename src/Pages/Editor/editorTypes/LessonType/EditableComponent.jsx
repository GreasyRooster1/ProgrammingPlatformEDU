import React, {useState} from 'react';
import styles from "./editableComponent.module.css"
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableText from "./EditableComponents/EditableText.jsx";

function EditableComponent(props) {
    const [componentData,setComponentData] = useState(props.component);

    const components = {
        "text":<EditableText setComponentData={setComponentData} />,
        "title":<EditableText setComponentData={setComponentData}/>
    }

    return (
        <div className={styles.editableStep}>
            <StepComponent component={componentData} components={components} />
        </div>
    );
}

export default EditableComponent;