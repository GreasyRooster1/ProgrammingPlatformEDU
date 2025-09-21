import SingleFileLanguageType from "../SingleFileLanguageType.jsx";
import P5jsExecutor from "../Executors/DomainExecutor.jsx";
import {useState} from "react";

function P5jsType(props){
    const [editorData,setEditorData] = useState("");

    return (
        <SingleFileLanguageType
            executor={(
                <P5jsExecutor projectMetadata={props.projectMetadata} editorData={props.editorData}/>
            )}
            editorData={editorData}
            setEditorData={setEditorData}
            {...props}
        />
    )
}

export default P5jsType;