import privateIcon from "../icons/PrivateVisIcon.svg";
import publicIcon from "../icons/PublicVisIcon.svg";
import unlistedIcon from "../icons/UnlistedVisIcon.svg";
import vite from "/vite.svg";

import jsIcon from "../icons/lang/js.svg";

const projectTypes = {
    P5js:{
        name: "p5.js",
        icon:jsIcon,
        langName: "JavaScript",
    },
    PythonTurtle:{
        name: "Python",
        icon:jsIcon,
        langName: "Python",
    },
    Web:{
        name: "Web",
        icon:jsIcon,
        langName: "Web",
    },
    Lesson:{
        name: "Lesson Builder",
        icon:jsIcon,
        langName: "Lesson",
    }
}


function getLangNameForType(rawType){
    let type =projectTypes[rawType];
    if(type===undefined){
        return "?"
    }
    return type.langName??"?";
}

function getProjectNamedType(rawType){
    let type =projectTypes[rawType];
    if(type===undefined){
        return "?"
    }
    return type.name??"?";
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

function getTimestampAge(stamp){
    if(stamp===null||stamp===undefined) {
        return "";
    }

    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    let msPerYear = msPerDay * 365;

    let current =Date.now();

    let elapsed = current - stamp*1000;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed/1000) + 's';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed/msPerMinute) + 'min';
    }

    else if (elapsed < msPerDay ) {
        return Math.round(elapsed/msPerHour ) + 'h';
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + 'd';
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + 'mo';
    }

    else {
        return Math.round(elapsed/msPerYear ) + 'y';
    }

}

export {getLangNameForType,getIconForVisibility,getTimestampAge,getProjectNamedType,projectTypes};