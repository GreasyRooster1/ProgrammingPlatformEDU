import React, {useState} from 'react';
import CodeInput from "../../../../components/CodeInput.jsx";
import TitleDesc from "../../../../components/text/TitleDesc.jsx";

import styles from "./dataPanel.module.css"
import SmallTitle from "../../../../components/text/SmallTitle.jsx";
import TextBox from "../../../../components/Form/TextBox.jsx";

function DataPanel(props) {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [starterCode,setStarterCode] = useState("");

    const validateName = (name) => {
        return name.length > 0 && name.length <= 64;
    }

    return (
        <div className={styles.dataPanel}>
            <div>
                <SmallTitle>Name</SmallTitle>
                <TextBox placeholder={"Lesson name"} value={name} validate={validateName} setValue={setName}></TextBox>
            </div>

            <div>
                <SmallTitle>Description</SmallTitle>
                <TextBox placeholder={"Lesson description"} value={description} validate={validateName} setValue={setDescription}></TextBox>
            </div>

            <div>
                <TitleDesc title={"Boilerplate Code"}>Add some code that will run with this project</TitleDesc>
                <CodeInput value={starterCode} setValue={setStarterCode} language={"javascript"} />
            </div>
        </div>
    );
}

export default DataPanel;