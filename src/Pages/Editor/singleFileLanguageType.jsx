import EditorType from "./editorType.jsx";
import TypedLanguageType from "./typedLanguageType.jsx";

class SingleFileLanguageType extends TypedLanguageType {
    constructor(projectMetadata) {
        super(projectMetadata);
    }

    onLoadProject() {}
}

export default SingleFileLanguageType;