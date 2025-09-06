import React from 'react';
import styles from "./detailView.module.css";
import MedTitle from "../../../components/text/MedTitle.jsx";
import SubText from "../../../components/text/SubText.jsx";
import SecondaryButton from "../../../components/buttons/SecondaryButton.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import privateIcon from "/icons/PrivateVisIcon.svg"
import {getIconForVisibility, getProjectNamedType} from "../../../api/net/proj.js";
import {useNavigate} from "react-router-dom";

function DetailView(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.title}>
                <MedTitle>{props.project.name}</MedTitle>
                <SubText>{getProjectNamedType(props.project.project_type)}</SubText>
                <SubText className={styles.visText} icon={getIconForVisibility(props.project.visibility)}>{props.project.visibility}</SubText>
            </div>
            <div>
                <div className={styles.secondaryButtons}>
                    <SecondaryButton className={styles.copyButton}>Copy</SecondaryButton>
                    <SecondaryButton className={styles.deleteButton}>Delete</SecondaryButton>
                </div>
                <PrimaryButton className={styles.openButton} onClick={()=>{
                    console.log(props.project);
                    navigate("/editor", {state: {projectMetadata: props.project}});
                }}>
                    Open
                </PrimaryButton>
            </div>
        </>
    );
}

export default DetailView;