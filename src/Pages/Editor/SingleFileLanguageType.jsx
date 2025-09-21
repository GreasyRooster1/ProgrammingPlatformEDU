import EditorType from "./EditorType.jsx";
import TypedLanguageType from "./TypedLanguageType.jsx";
import {net} from "../../api/net/net.js";
import {useAuth} from "react-oidc-context";

function SingleFileLanguageType(props){
    const auth = useAuth();


    const loadProject = async ()=>{
        console.log("Loading project...");
        let blob = await net.proj.getFile(auth.user?.access_token,[props.projectMetadata.id,"main"])
        let text = await blob.text();
        props.setEditorData(text)
    }

    const onSave = ()=>{
        net.proj.saveFile(auth.user?.access_token,[props.projectMetadata.id,"main"],props.editorData,undefined)
    }

    return (
        <TypedLanguageType
            loadProject={loadProject}
            setEditorData={props.setEditorData}
            editorData={props.editorData}
            onSave={onSave}
            {...props}
        />
    )
}

export default SingleFileLanguageType;