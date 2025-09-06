import EditorType from "./EditorType.jsx";
import TypedLanguageType from "./TypedLanguageType.jsx";
import {net} from "../../api/net/net.js";
import {useState} from "react";

function SingleFileLanguageType(props){
    const [editorData,setEditorData] = useState("");


    const loadProject = async ()=>{
        console.log("Loading project...");
        let blob = await net.proj.getFile(props.token,[props.projectMetadata.id,"main"])
        let text = await blob.text();
        setEditorData(text)
    }

    const onSave = ()=>{
        net.proj.saveFile()
    }

    return (
        <TypedLanguageType
            loadProject={loadProject}
            setEditorData={setEditorData}
            editorData={editorData}
            onSave={onSave}
            {...props}
        />
    )
}

export default SingleFileLanguageType;