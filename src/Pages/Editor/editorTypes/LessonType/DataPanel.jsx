import React, {useState} from 'react';
import CodeInput from "../../../../components/CodeInput.jsx";

function DataPanel(props) {
    const [starterCode,setStarterCode] = useState();

    return (
        <>
            <CodeInput value={starterCode} setValue={setStarterCode} language={"javascript"} />
        </>
    );
}

export default DataPanel;