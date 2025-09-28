import React, {useEffect, useState} from 'react';
import AuthLock from "../../components/AuthLock.jsx";
import styles from "./homePage.module.css";
import LoadingScreen from "../../LoadingScreen.jsx";
import HomeGrid from "./HomeGrid.jsx";
import HomeGridItem from "./HomeGridItem.jsx";
import ProjectsBlock from "./ProjectsBlock/ProjectsBlock.jsx";
import MasteryBlock from "./Mastery/MasteryBlock.jsx";
import {useAdvAuth} from "../../api/auth.js";

function HomePage() {
    let auth = useAdvAuth();
    let [name,setName] = useState("");

    useEffect(() => {
        setName(
            auth.user?.name ?? auth.user?.given_name ?? auth.usernameState.username
        )
    },[auth.usernameState.username]);


    return (
        <AuthLock>
            <div className={styles.header}>
                {name && (<span className={styles.welcome}>Welcome, {name}</span>)}
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