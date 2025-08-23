const typesToLangMap = {
    "P5js":"Javascript",
    "PythonTurtle":"Python",
    "Web":"Web",
}

function getLangForType(rawType){
    return typesToLangMap[rawType]??"?";
}

export {getLangForType};