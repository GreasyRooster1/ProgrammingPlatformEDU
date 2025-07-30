import React, {useEffect} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {getUserId} from "../api/api.js";

function AuthProvider(props) {
    const {user, isAuthenticated,isLoading,getAccessTokenSilently } = useAuth0();
    let setUserData = props.setUserData;
    useEffect(() => {
        if(!isLoading && isAuthenticated) {
            let uid = getUserId(user);
            getAccessTokenSilently().then((e)=>{
                setUserData({
                    token:e,
                    uid:uid,
                    isAuthenticated:true,
                })
                console.log(uid)
            })
        }
    },[isLoading,isAuthenticated])

    return props.children;
}

export function defaultAuthData(){
    return {
        token:"",
        uid:"",
        isAuthenticated: false,
    }
}

export default AuthProvider;