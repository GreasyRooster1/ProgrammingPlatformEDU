import React from 'react';
import styles from './projectsItem.module.css'
import MedTitle from "../../../components/titles/MedTitle.jsx";

function ProjectsItem() {
    return (
        <>
            <div className={styles.list}>
                <MedTitle>Projects</MedTitle>
                <div>

                </div>
            </div>
            <div className={styles.details}>

            </div>
        </>
    );
}

export default ProjectsItem;