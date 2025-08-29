import EditorType from "./editorType.jsx";
import TypedLanguageType from "./typedLanguageType.jsx";
import {net} from "../../api/net.js";

class SingleFileLanguageType extends TypedLanguageType {
    constructor(projectMetadata) {
        super(projectMetadata);
    }

    loadProject() {
        net.proj.getFile(this.token,[this.state.id,"main"],undefined,this.onRequestError).then((contents)=>{
            this.setEditorData(contents);
        });
    }
}

export default SingleFileLanguageType;