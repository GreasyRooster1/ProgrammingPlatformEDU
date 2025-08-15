import React from 'react';
import styles from './projectsItem.module.css'
import MedTitle from "../../../components/text/MedTitle.jsx";
import SubText from "../../../components/text/SubText.jsx";

function ProjectsItem() {
    return (
        <>
            <div className={styles.list}>
                <MedTitle>Projects</MedTitle>
                <div className={styles.projList}>

                </div>
                <div className={styles.viewAllContainer}><SubText >View All...</SubText></div>
            </div>
            <div className={styles.details}>

            </div>
        </>
    );
}

export default ProjectsItem;