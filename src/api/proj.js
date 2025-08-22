const typesToLangMap = {
    "p5js":"Javascript",
    "pythonTurtle":"Python",
    "web":"Web",
}

function getLangForType(rawType){
    return typesToLangMap[rawType]??"?";
}

export {getLangForType};