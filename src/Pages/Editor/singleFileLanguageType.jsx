import EditorType from "./editorType.jsx";
import TypedLanguageType from "./typedLanguageType.jsx";
import {net} from "../../api/net.js";
import {useState} from "react";

function SingleFileLanguageType(props){
    const [editorData,setEditorData] = useState("");


    const loadProject = ()=>{
        console.log("Loading project...");
        net.proj.getFile(props.token,[props.projectMetadata.id,"main"],undefined,undefined)
            .asText()
            .then((contents)=>{
                setEditorData(contents.text())
            });
    }

    return (
        <TypedLanguageType
            loadProject={loadProject}
            setEditorData={setEditorData}
            editorData={editorData}
            {...props}
        />
    )
}

export default SingleFileLanguageType;