import EditorType from "./editorType.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";

class TypedLanguageType extends EditorType {
    constructor(props) {
        super(props);

        this.editorRef =null;
        this.codeEditor = (<CodePanel value={this.state.editorUpdateValue} callbacks={{
            onMount:this.monacoOnMount,
            onChange:this.monacoOnChange,
        }}/>);

        this.state = {
            ...this.state,
            editorUpdateValue: ""
        }
    }

    monacoOnMount = (editor, monaco)=>{
        this.editorRef = editor;
    }
    monacoOnChange = (value, event)=>{
        this.onChange(value, event);
    }

    getEditorData(){
        if(this.editorRef===null){
            throw new Error("Editor has not yet been mounted")
        }
        this.editorRef.current.getValue();
    }

    setEditorData(data){
        this.setState({editorUpdateValue:data});
    }

    onEditorChange(){

    }
}

export default TypedLanguageType;