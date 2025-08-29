import EditorType from "./editorType.jsx";
import TypedLanguageType from "./typedLanguageType.jsx";

class SingleFileLanguageType extends TypedLanguageType {
    constructor(projectMetadata) {
        super(projectMetadata);
    }

    loadProject() {

    }
}

export default SingleFileLanguageType;