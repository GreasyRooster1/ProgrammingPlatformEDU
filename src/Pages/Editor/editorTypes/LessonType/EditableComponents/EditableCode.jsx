import React, {useEffect, useState} from 'react';
import CodeInput from "../../../../../components/form/CodeInput.jsx";

function EditableCode(props) {
    const [code, setCode] = useState(props.component.code??"");
    const [language, setLanguage] = useState(props.component.language??"javascript");

    useEffect(() => {
        props.updateComponent({
            code: code,
        })
    },[code])

    useEffect(() => {
        props.updateComponent({
            lang: language,
        })
    },[language])

    return (
        <CodeInput
            setValue={setCode}
            language={language}
            value={code}
        ></CodeInput>
    );
}

export default EditableCode;