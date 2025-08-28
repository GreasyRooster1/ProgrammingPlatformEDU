const requiredEditorFunctions = [
    "save",
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
}

export default EditorType;