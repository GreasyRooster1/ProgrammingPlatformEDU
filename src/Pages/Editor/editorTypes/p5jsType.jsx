import SingleFileLanguageType from "../SingleFileLanguageType.jsx";
import {useState} from "react";
import P5Executor from "../Executors/P5Executor.jsx";

function P5jsType(props){
    const [editorData,setEditorData] = useState("");

    return (
        <SingleFileLanguageType
            executor={(
                <P5Executor projectMetadata={props.projectMetadata} editorData={props.editorData}/>
            )}
            editorData={editorData}
            setEditorData={setEditorData}
            {...props}
        />
    )
}

export default P5jsType;