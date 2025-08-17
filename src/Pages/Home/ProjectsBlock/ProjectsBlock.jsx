import React from 'react';
import styles from './projectsBlock.module.css'
import MedTitle from "../../../components/text/MedTitle.jsx";
import SubText from "../../../components/text/SubText.jsx";
import Project from "./Project.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";

import publicIcon from "/icons/PublicVisIcon.svg"
import unlistedIcon from "/icons/UnlistedVisIcon.svg"
import privateIcon from "/icons/PrivateVisIcon.svg"
import SecondaryButton from "../../../components/buttons/SecondaryButton.jsx";
import ProjectsList from "./ProjectsList.jsx";

function ProjectsBlock() {
    let [selectedProject, setSelectedProject] = React.useState(null);

    return (
        <>
            <div className={styles.list}>
                <MedTitle>Projects</MedTitle>
                <ProjectsList className={styles.projList} setSelectedProj={setSelectedProject} />
                <div className={styles.viewAllContainer}><SubText >View All...</SubText></div>
            </div>
            <div className={styles.details}>
                <div className={styles.detailsTitle}>
                    <MedTitle>Bouncing Rainbow Squares</MedTitle>
                    <SubText className={styles.visText} icon={privateIcon}>Private</SubText>
                </div>
                <div>
                    <div className={styles.secondaryButtons}>
                        <SecondaryButton className={styles.copyButton}>Copy</SecondaryButton>
                        <SecondaryButton className={styles.deleteButton}>Delete</SecondaryButton>
                    </div>
                    <PrimaryButton className={styles.openButton}>Open</PrimaryButton>
                </div>
            </div>
        </>
    );
}

export default ProjectsBlock;