import EditorType from "./EditorType.jsx";
import TypedLanguageType from "./TypedLanguageType.jsx";
import {net} from "../../api/net.js";
import {useState} from "react";

function SingleFileLanguageType(props){
    const [editorData,setEditorData] = useState("");


    const loadProject = async ()=>{
        console.log("Loading project...");
        let blob = await net.proj.getFile(props.token,[props.projectMetadata.id,"main"],undefined,undefined)
        let text = await blob.text();
        setEditorData(text)
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