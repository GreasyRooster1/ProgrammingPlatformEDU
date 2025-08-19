import {API_URL} from "./net.js";

//quickly build a request handler for the backend
function req(uri, method, func){
    //args for the request
    return async (...args) => {
        let argsUri = "/"+args.join("/");
        const response = await fetch(API_URL + uri + argsUri,{
            method: method,
            headers: {
                "Authorization":
            }
        })
        return func.apply(this, [response,...args]);
    };
}

function jsonReq(uri){
    return req(uri,"GET",(response)=>{
        return response.json();
    })
}

export {req,jsonReq}