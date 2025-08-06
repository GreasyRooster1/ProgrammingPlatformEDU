import React, {useEffect} from 'react';
import {useAuth0} from "@auth0/auth0-react";

function AuthProvider(props) {
    const {user, isAuthenticated,isLoading,getAccessTokenSilently } = useAuth0();
    let setUserData = props.setUserData;
    useEffect(() => {
        if(!isLoading && isAuthenticated) {
            getAccessTokenSilently().then((e)=>{
                setUserData({
                    token:e,
                    isAuthenticated:true,
                })
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