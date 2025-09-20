import React from 'react';
import MedTitle from "../../../components/text/MedTitle.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";

function NewProjectModal(props) {
    return (
        <>
            <MedTitle>New Project</MedTitle>
            <PrimaryButton>Create</PrimaryButton>
        </>
    );
}

export default NewProjectModal;