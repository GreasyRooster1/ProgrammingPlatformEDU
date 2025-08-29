import EditorType from "./editorType.jsx";
import TypedLanguageType from "./typedLanguageType.jsx";
import {net} from "../../api/net.js";

class SingleFileLanguageType extends TypedLanguageType {
    constructor(projectMetadata) {
        super(projectMetadata);
        console.log("load")
        console.log(this.loadProject);
    }

    loadProject = ()=> {
        console.log("Loading project...");
        net.proj.getFile(this.token,[this.state.id,"main"],undefined,this.onRequestError).then((contents)=>{
            contents.text().then((text)=>{
                console.log(text);
                this.setEditorData(text);
            })
        });
    }
}

export default SingleFileLanguageType;