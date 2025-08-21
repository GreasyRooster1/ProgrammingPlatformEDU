import {API_URL} from "./net.js";

//quickly build a request handler for the backend
function authReq(uri, method, func){
    //args for the request
    return async (authToken,reqArgs,setLoading,setError) => {
        let authHead = authToken;
        let argsUri = "/" + reqArgs.join("/");
        if(setError===undefined){
            setError = ()=>{}
        }
        try {
            const response = await fetch(API_URL + uri + argsUri,{
                method: method,
                headers: {
                    "Authorization":authHead
                }
            })
            if (!response.ok) {
                setError(await response.text());
                return response;
            }
            setLoading(false);
            return await func(this, [response,reqArgs]);
        } catch (err) {
            setError(err)
            console.error(err)
        }
    };
}

function jsonReq(uri,useAuth){
    return authReq(uri,"GET", useAuth, async (response)=>{
        return await response.json();
    })
}

export {authReq,jsonReq}