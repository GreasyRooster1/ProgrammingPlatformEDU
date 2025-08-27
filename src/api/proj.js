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

export {getLangForType,getIconForVisibility,getTimestampAge};