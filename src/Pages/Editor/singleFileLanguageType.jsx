import EditorType from "./editorType.jsx";
import TypedLanguageType from "./typedLanguageType.jsx";
import {net} from "../../api/net.js";
import {useState} from "react";

function SingleFileLanguageType(props){
    const [editorData,setEditorData] = useState("");


    const loadProject = ()=>{
        console.log("Loading project...");
        net.proj.getFile(this.token,[this.state.id,"main"],undefined,this.onRequestError).then((contents)=>{
            contents.text().then((text)=>{
                console.log(text);
                setEditorData(text);
            })
        });
    }

    return (
        <TypedLanguageType
            loadProject={loadProject}
            setEditorData={setEditorData}
            {...props}
        />
    )
}

export default SingleFileLanguageType;