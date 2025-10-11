import React, {useState} from 'react';
import CodeInput from "../../../../components/CodeInput.jsx";
import TitleDesc from "../../../../components/text/TitleDesc.jsx";

import styles from "./dataPanel.module.css"

function DataPanel(props) {
    const [starterCode,setStarterCode] = useState("");

    return (
        <div className={styles.dataPanel}>
            <TitleDesc title={"Boilerplate Code"}>Add some code that will run with this project</TitleDesc>
            <CodeInput value={starterCode} setValue={setStarterCode} language={"javascript"} />
        </div>
    );
}

export default DataPanel;