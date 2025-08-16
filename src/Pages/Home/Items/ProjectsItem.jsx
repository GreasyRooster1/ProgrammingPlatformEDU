import React from 'react';
import styles from './projectsItem.module.css'
import MedTitle from "../../../components/text/MedTitle.jsx";
import SubText from "../../../components/text/SubText.jsx";
import Project from "./Project.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";

import publicIcon from "/icons/PaperPlane.svg"

function ProjectsItem() {
    return (
        <>
            <div className={styles.list}>
                <MedTitle>Projects</MedTitle>
                <div className={styles.projList}>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
                <div className={styles.viewAllContainer}><SubText >View All...</SubText></div>
            </div>
            <div className={styles.details}>
                <div className={styles.detailsTitle}>
                    <MedTitle>Bouncing Rainbow Squares</MedTitle>
                    <SubText className={styles.visText} icon={publicIcon}>Public</SubText>
                </div>
                <div>
                    <PrimaryButton className={styles.openButton}>Open</PrimaryButton>
                </div>
            </div>
        </>
    );
}

export default ProjectsItem;