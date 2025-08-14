import React from 'react';
import AuthLock from "../../components/AuthLock.jsx";
import styles from "./homePage.module.css";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../../Loading.jsx";

function HomePage() {
    let {user, isLoading, isAuthenticated,loginWithRedirect} = useAuth0();

    if(isLoading) {
        return (<Loading/>);
    }else if(!isAuthenticated) {
        loginWithRedirect({redirectUrl: window.location.href});
        return (<Loading/>);
    }

    return (
        <AuthLock>
            <div className={styles.header}>
                <span className={styles.welcome}>Welcome, {user.name}</span>
            </div>
            home
        </AuthLock>
    );
}

export default HomePage;