import EditorType from "./editorType.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import {useRef} from "react";
import {EMPTY_FUNC} from "../../api/util.js";


/*
* onEditorMount
* onEditorChange
*/
function TypedLanguageType(props){
    const editorRef = useRef(null);

    props.onEditorMount = props.onEditorMount||EMPTY_FUNC;
    props.onEditorChange = props.onEditorChange||EMPTY_FUNC;

    const onMonacoMount = (editor,monaco)=>{
        editorRef.current = editor
        props.onEditorMount();
    }

    const onMonacoChange = (value,event)=>{
        props.onEditorChange();
        props.setEditorData(value);
    }

    let codeEditor = (<CodePanel value={props.editorData} callbacks={{
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