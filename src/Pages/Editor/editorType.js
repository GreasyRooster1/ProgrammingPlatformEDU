import {useRef, useState} from "react";

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

function useEditor(initialData) {
    const carRef = useRef();
    if (!carRef.current) {
        carRef.current = new EditorType(initialData);
    }
    return carRef.current;
}

function useEditorProjection(car) {
    const [projection, setProjection] = useState(editorProjection(car));
    return {
        ...projection,
        // each change function modifies the car AND updates the projection
        changeColor: (newColor) => {
            car.changeColor(newColor);
            setProjection(editorProjection(car));
        },
    };
}

function editorProjection(car) {
    // include any data your components need
    return { color: car.data.color };
}

export {EditorType, };