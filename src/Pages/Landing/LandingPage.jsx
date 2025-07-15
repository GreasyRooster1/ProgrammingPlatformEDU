import React, {useState} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {getUserId} from "../../api/api.js";
import LoginErrors from "./LoginErrors.jsx";

function LandingPage() {
    const { loginWithRedirect,logout, user, isAuthenticated,isLoading,getAccessTokenWithPopup } = useAuth0();

    if(!isLoading && isAuthenticated) {
        console.log(user)
        console.log(getUserId(user))
        // getAccessTokenWithPopup ({
        //     authorizationParams: {
        //         audience: `https://dev-pqbjxkbpmw3pn3x7.us.auth0.com/api/v2/`,
        //         scope:""
        //     },
        // }).then((t)=>{
        //     console.log(t)
        // })
    }

    return (
        <LoginErrors>
            <div>
                landing
                <button onClick={() => loginWithRedirect()}>Login</button>
                <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                    Log Out
                </button>
            </div>
        </LoginErrors>
    );
}

export default LandingPage;