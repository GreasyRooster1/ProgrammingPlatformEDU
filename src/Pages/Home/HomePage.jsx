import React from 'react';
import AuthLock from "../../components/AuthLock.jsx";
import styles from "./homePage.module.css";
import {useAuth0} from "@auth0/auth0-react";

function HomePage() {
    let {user} = useAuth0();
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