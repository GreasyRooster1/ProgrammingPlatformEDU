import SingleFileLanguageType from "../SingleFileLanguageType.jsx";
import {useRef, useState} from "react";
import P5Executor from "../Executors/P5Executor.jsx";

function P5jsType(props){
    const [editorData,setEditorData] = useState("");
    let execRef = useRef(null);

    return (
        <SingleFileLanguageType
            executor={(
                <P5Executor ref={execRef} projectMetadata={props.projectMetadata} editorData={props.editorData}/>
            )}
            editorData={editorData}
            setEditorData={setEditorData}
            execRef={execRef}
            {...props}
        />
    )
}

export default P5jsType;