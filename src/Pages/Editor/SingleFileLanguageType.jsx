import EditorType from "./EditorType.jsx";
import TypedLanguageType from "./TypedLanguageType.jsx";
import {net} from "../../api/net/net.js";
import {useState} from "react";
import {useAuth} from "react-oidc-context";

function SingleFileLanguageType(props){
    const auth = useAuth();
    const [editorData,setEditorData] = useState("");


    const loadProject = async ()=>{
        console.log("Loading project...");
        let blob = await net.proj.getFile(auth.user?.id_token,[props.projectMetadata.id,"main"])
        let text = await blob.text();
        setEditorData(text)
    }

    const onSave = ()=>{
        net.proj.saveFile(auth.user?.id_token,[props.projectMetadata.id,"main"],editorData,undefined)
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