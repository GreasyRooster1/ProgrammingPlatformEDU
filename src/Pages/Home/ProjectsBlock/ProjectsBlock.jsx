import React, {useState} from 'react';
import styles from './projectsBlock.module.css'
import MedTitle from "../../../components/text/MedTitle.jsx";
import SubText from "../../../components/text/SubText.jsx";
import ProjectsList from "./ProjectsList.jsx";
import DetailView from "./DetailView.jsx";
import SecondaryButton from "../../../components/buttons/SecondaryButton.jsx";
import LinkButton from "../../../components/buttons/LinkButton.jsx";
import {useAuth} from "react-oidc-context";
import {net} from "../../../api/net/net.js";

function ProjectsBlock(props) {
    const auth = useAuth();
    const [selectedProject, setSelectedProject] = useState(null);

    let projClickHandle = (data) => {
        setSelectedProject(data)
    }

    let newProject = () => {
        net.proj.new(auth.user?.access_token,[]).then(()=>{

        })
    }

    return (
        <>
            <div className={styles.list}>
                <MedTitle>Projects</MedTitle>
                <ProjectsList className={styles.projList} clickHandle={projClickHandle}/>
                <div className={styles.newButtonContainer}>
                    <LinkButton onClick={newProject}>New Project</LinkButton>
                </div>
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