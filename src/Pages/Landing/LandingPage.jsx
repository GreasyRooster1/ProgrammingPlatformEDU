import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

function LandingPage() {
    const { loginWithRedirect,logout, user, isAuthenticated,isLoading} = useAuth0();

    if(!isLoading && isAuthenticated) {
        console.log(user)
        console.log(user.sub)
    }

    return (
        <div>
            landing
            <button onClick={() => loginWithRedirect()}>Login</button>
            <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                Log Out
            </button>
        </div>
    );
}

export default LandingPage;