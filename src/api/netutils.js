import {API_URL} from "./net.js";

//quickly build a request handler for the backend
function req(uri, method, useAuth, func){
    //args for the request
    return async (...args) => {
        let authHead = useAuth?args[0]:"";
        let argsUri;
        if(authHead) {
            argsUri = "/" + args.slice(1).join("/");
        }else{
            argsUri = "/" + args.join("/");
        }
        const response = await fetch(API_URL + uri + argsUri,{
            method: method,
            headers: {
                "Authorization":authHead
            }
        })
        return func.apply(this, [response,...args]);
    };
}

function jsonReq(uri,useAuth){
    return req(uri,"GET", useAuth, (response)=>{
        return response.json();
    })
}

export {req,jsonReq}