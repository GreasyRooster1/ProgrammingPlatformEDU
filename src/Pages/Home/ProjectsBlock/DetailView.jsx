import React from 'react';
import styles from "./detailView.module.css";
import MedTitle from "../../../components/text/MedTitle.jsx";
import SubText from "../../../components/text/SubText.jsx";
import SecondaryButton from "../../../components/buttons/SecondaryButton.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import privateIcon from "/icons/PrivateVisIcon.svg"
import {getIconForVisibility, getProjectNamedType} from "../../../api/proj.js";

function DetailView(props) {
    return (
        <>
            <div className={styles.title}>
                <MedTitle>{props.project.name}</MedTitle>
                <SubText>{getProjectNamedType(props.project.project_type)}</SubText>
                <SubText className={styles.visText} icon={getIconForVisibility(props.project.visibility)}>Private</SubText>
            </div>
            <div>
                <div className={styles.secondaryButtons}>
                    <SecondaryButton className={styles.copyButton}>Copy</SecondaryButton>
                    <SecondaryButton className={styles.deleteButton}>Delete</SecondaryButton>
                </div>
                <PrimaryButton className={styles.openButton}>Open</PrimaryButton>
            </div>
        </>
    );
}

export default DetailView;