import React, {useEffect, useState} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {getUserId} from "../../api/api.js";
import AuthProvider, {defaultAuthData} from "../../components/AuthProvider.jsx";

function LandingPage() {
    const {loginWithRedirect, logout } = useAuth0();
    const [userData, setUserData] = useState(defaultAuthData());

    return (
        <AuthProvider setUserData={setUserData}>
            <div>
                landing
                <button onClick={() => loginWithRedirect()}>Login</button>
                <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                    Log Out
                </button>
                token: {userData.token}
            </div>
        </AuthProvider>
    )
}

export default LandingPage;