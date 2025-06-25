import {sha256} from "js-sha256";

export function getUserId(user){
    return sha256(user.sub);
}