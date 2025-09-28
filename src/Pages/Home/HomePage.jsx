import React, {useState} from 'react';
import AuthLock from "../../components/AuthLock.jsx";
import styles from "./homePage.module.css";
import LoadingScreen from "../../LoadingScreen.jsx";
import HomeGrid from "./HomeGrid.jsx";
import HomeGridItem from "./HomeGridItem.jsx";
import ProjectsBlock from "./ProjectsBlock/ProjectsBlock.jsx";
import {useAuth} from "react-oidc-context";
import MasteryBlock from "./Mastery/MasteryBlock.jsx";

function HomePage() {
    let auth = useAuth();

    let name = auth.user?.name ?? auth.user.given_name ?? auth.user.username;
    return (
        <AuthLock>
            <div className={styles.header}>
                <span className={styles.welcome}>Welcome, {auth.user?.name}</span>
            </div>
            <div className={styles.gridWrapper}>
                <HomeGrid>
                    <HomeGridItem>
                        <MasteryBlock/>
                    </HomeGridItem>
                    <HomeGridItem>
                        <MasteryBlock/>
                    </HomeGridItem>
                    <HomeGridItem>
                        <MasteryBlock/>
                    </HomeGridItem>
                    <HomeGridItem isLong={true}>
                        <ProjectsBlock/>
                    </HomeGridItem>
                </HomeGrid>
            </div>
        </AuthLock>
    );
}

export default HomePage;