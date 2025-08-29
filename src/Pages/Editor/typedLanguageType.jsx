import EditorType from "./editorType.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";

class TypedLanguageType extends EditorType {
    constructor(props) {
        super(props);
        this.codeEditor = (<CodePanel callbacks={{
            onMount:this.monacoOnMount
        }}/>);
        this.editorRef =null;
    }

    monacoOnMount = (editor, monaco)=>{
        this.editorRef = editor;
    }

    getEditorData(){
        if(this.editorRef===null){
            throw new Error("Editor has not yet been mounted")
        }
        this.editorRef.current.getValue();
    }

    setEditorData(){

    }
}

export default TypedLanguageType;