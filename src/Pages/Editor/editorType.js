const requiredEditorFunctions = [
    "save",
    "setupEditorUI"
]


function typePreflightChecks(clazz){
    for(let func of requiredEditorFunctions) {
        if(typeof clazz[func] !== "function"){
            throw new Error(`Invalid type preflight checks: ${func}`);
        }
    }
}

class EditorType {
    constructor(projectMetadata) {
        typePreflightChecks(this);
        this.projectMetadata = projectMetadata;
    }

    save(){
        throw new Error("Save must be implemented.")
    }

    setupEditorUI(){
        throw new Error("setupEditorUI must be implemented.")
    }

    useDefaultUI(){
        return true;
    }
}

export default EditorType;