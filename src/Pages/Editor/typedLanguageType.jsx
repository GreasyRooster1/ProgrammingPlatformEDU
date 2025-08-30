import EditorType from "./editorType.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import {useRef} from "react";


/*
* onEditorMount
* onEditorChange
*/
function TypedLanguageType(props){
    const editorRef = useRef(null);

    const onMonacoMount = (editor,monaco)=>{
        editorRef.current = editor
        props.onEditorMount();
    }

    const onMonacoChange = (value,event)=>{
        props.onEditorChange();
        props.setEditorData(value);
    }

    let codeEditor = (<CodePanel value={this.state.editorUpdateValue} callbacks={{
        onMount:onMonacoMount,
        onChange:onMonacoChange,
    }}/>);

    return (
        <EditorType
            codeEditor={codeEditor}
            {...props}
        />
    )
}

export default TypedLanguageType;