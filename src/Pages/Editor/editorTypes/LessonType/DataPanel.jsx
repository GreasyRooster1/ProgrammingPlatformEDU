import React, {useState} from 'react';
import CodeInput from "../../../../components/CodeInput.jsx";
import TitleDesc from "../../../../components/text/TitleDesc.jsx";

import styles from "./dataPanel.module.css"
import SmallTitle from "../../../../components/text/SmallTitle.jsx";
import TextBox from "../../../../components/Form/TextBox.jsx";

function DataPanel(props) {
    const [name,setName] = useState("");
    const [starterCode,setStarterCode] = useState("");

    const validateName = (name) => {
        return name.length > 0 && name.length <= 64;
    }

    return (
        <div className={styles.dataPanel}>
            <TextBox placeholder={"Lesson name"} value={name} validate={validateName} setValue={setName}></TextBox>
            <br/>

            <TitleDesc title={"Boilerplate Code"}>Add some code that will run with this project</TitleDesc>
            <CodeInput value={starterCode} setValue={setStarterCode} language={"javascript"} />
            <br/>
        </div>
    );
}

export default DataPanel;