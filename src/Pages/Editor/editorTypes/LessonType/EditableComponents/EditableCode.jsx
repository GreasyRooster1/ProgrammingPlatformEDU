import React, {useEffect, useState} from 'react';
import CodeInput from "../../../../../components/CodeInput.jsx";

function EditableCode(props) {
    const [code, setCode] = useState(props.component.code);
    const [language, setLanguage] = useState(props.component.language);

    const updateComponent = (key,value) => {
        let component = {...props.component};
        component[key] = value;
        props.setComponentData(component)
    }

    useEffect(() => {
        updateComponent("code",code)
        console.log(props.stepData)
    },[code])

    useEffect(() => {
        updateComponent("lang",language)
    },[language])

    useEffect(() => {
        //setCode(props.component.code);
        //setLanguage(props.component.language);
    },[props.stepData]);

    return (
        <CodeInput
            setValue={setCode}
            language={language}
            value={code}
        ></CodeInput>
    );
}

export default EditableCode;