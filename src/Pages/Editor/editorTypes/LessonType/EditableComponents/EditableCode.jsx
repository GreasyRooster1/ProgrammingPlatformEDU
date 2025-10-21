import React, {useEffect, useState} from 'react';
import CodeInput from "../../../../../components/CodeInput.jsx";

function EditableCode(props) {
    const [code, setCode] = useState(props.component.code??"");
    const [language, setLanguage] = useState(props.component.language??"javascript");

    useEffect(() => {
        props.setComponent({
            ...props.component,
            code: code,
        })
    },[code])

    useEffect(() => {
        props.setComponent({
            ...props.component,
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