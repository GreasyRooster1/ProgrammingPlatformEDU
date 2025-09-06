import {API_URL} from "../constants.js";

//quickly build a request handler for the backend
function authReq(uri, method, func){
    //args for the request
    return async (authToken,reqArgs,setLoading,setError) => {
        let argsUri = "/" + reqArgs.join("/");
        if(setError===undefined){
            setError = ()=>{}
        }
        if(setLoading===undefined){
            setLoading = ()=>{}
        }
        try {
            const response = await fetch(API_URL + uri + argsUri,{
                method: method,
                headers: {
                    "Authorization":authToken
                }
            })
            if (!response.ok) {
                setError(await response.text());
                return response;
            }
            setLoading(false);
            return await func(response,reqArgs);
        } catch (err) {
            setError(err)
            console.error(err)
        }
    };
}

function jsonReq(uri){
    return authReq(uri,"GET", async (response)=>{
        return await response.json();
    })
}

function fileReq(uri){
    return authReq(uri,"GET", async (response)=>{
        return response.blob();
    })
}

function uploadReq(uri){
    return async (authToken,reqArgs,body,setLoading,setError) => {
        let argsUri = "/" + reqArgs.join("/");
        if(setError===undefined){
            setError = ()=>{}
        }
        if(setLoading===undefined){
            setLoading = ()=>{}
        }
        try {
            const response = await fetch(API_URL + uri + argsUri,{
                method: "POST",
                headers: {
                    "Authorization":authToken
                },
                body:body,
            })
            if (!response.ok) {
                setError(await response.text());
                return response;
            }
            setLoading(false);
        } catch (err) {
            setError(err)
            console.error(err)
        }
    };
}

export {authReq,jsonReq,fileReq}