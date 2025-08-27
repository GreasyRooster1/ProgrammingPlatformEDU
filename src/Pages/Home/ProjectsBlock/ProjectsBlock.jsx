import React, {useState} from 'react';
import styles from './projectsBlock.module.css'
import MedTitle from "../../../components/text/MedTitle.jsx";
import SubText from "../../../components/text/SubText.jsx";
import ProjectsList from "./ProjectsList.jsx";
import DetailView from "./DetailView.jsx";

function ProjectsBlock(props) {
    const [selectedProject, setSelectedProject] = useState(null);

    let clickHandle = (data) => {
        setSelectedProject(data)
    }

    return (
        <>
            <div className={styles.list}>
                <MedTitle>Projects</MedTitle>
                <ProjectsList className={styles.projList} clickHandle={clickHandle} userData={props.userData}/>
                <div className={styles.viewAllContainer}><SubText>View All...</SubText></div>
            </div>
            <div className={styles.details}>
                {
                   selectedProject?
                       <DetailView project={selectedProject} />:
                       <MedTitle className={styles.unloadedTitle}>
                           Click a project
                       </MedTitle>
                }
            </div>
        </>
    );
}

export default ProjectsBlock;