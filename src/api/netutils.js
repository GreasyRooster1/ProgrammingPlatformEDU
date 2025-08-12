import {API_URL} from "./net.js";

//quickly build a request handler for the backend
function req(uri, func){
    //args for the request
    return (...args)=>{
        return new Promise((resolve,reject)=>{
            let argsUri = "/"+args.join("/");
            fetch(API_URL + uri + argsUri).then(r  =>{
                resolve(func.apply(this, [r,...args]));
            }).catch(err=>{
                reject(err);
            })
        })
    };
}

function jsonReq(uri){
    req(uri,(response)=>{
        return response.json();
    })
}

export {req,jsonReq}