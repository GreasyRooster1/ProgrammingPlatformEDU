import EditorType from "./editorType.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";

class TypedLanguageType extends EditorType {
    constructor(props) {
        super(props);
        this.codeEditor = (<CodePanel />);
    }

    getEditorData(){

    }

    setEditorData(){

    }
}

export default TypedLanguageType;