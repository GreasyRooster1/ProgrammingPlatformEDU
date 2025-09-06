import EditorType from "./EditorType.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import {useRef} from "react";
import {EMPTY_FUNC} from "../../api/func.js";


/*
* onEditorMount
* onEditorChange
*/
function TypedLanguageType(props){
    const editorRef = useRef(null);

    let onEditorMount = props.onEditorMount||EMPTY_FUNC;
    let onEditorChange = props.onEditorChange||EMPTY_FUNC;
    let setEditorData = props.setEditorData||EMPTY_FUNC;

    const onMonacoMount = (editor,monaco)=>{
        editorRef.current = editor
        onEditorMount();
    }

    const onMonacoChange = (value,event)=>{
        onEditorChange();
        setEditorData(value);
    }

    let codeEditor = (<CodePanel value={props.editorData??""} callbacks={{
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