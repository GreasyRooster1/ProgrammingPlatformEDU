import React, {useState} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import AuthProvider, {defaultAuthData} from "../../components/AuthProvider.jsx";
import styles from "./landingPage.module.css"

function LandingPage() {
    const {loginWithRedirect, logout } = useAuth0();
    const [userData, setUserData] = useState(defaultAuthData());

    return (
        <AuthProvider setUserData={setUserData}>
            <div className={styles.header}>
                <span className={styles.welcome}>Welcome, </span>
            </div>
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