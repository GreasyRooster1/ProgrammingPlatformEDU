import privateIcon from "/icons/PrivateVisIcon.svg";
import publicIcon from "/icons/PublicVisIcon.svg";
import unlistedIcon from "/icons/UnlistedVisIcon.svg";
import vite from "/vite.svg";

const typesToLangMap = {
    "P5js":"Javascript",
    "PythonTurtle":"Python",
    "Web":"Web",
}

function getLangForType(rawType){
    return typesToLangMap[rawType]??"?";
}

const iconFallback = vite;
const visIconMap = {
    "Private": privateIcon,
    "Public": publicIcon,
    "Unlisted": unlistedIcon,
    "Invisible": iconFallback,
}

function getIconForVisibility(rawVisibility){
    return visIconMap[rawVisibility]??iconFallback;
}

export {getLangForType,getIconForVisibility};