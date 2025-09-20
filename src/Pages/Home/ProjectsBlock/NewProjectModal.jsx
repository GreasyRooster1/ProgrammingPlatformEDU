import React, {useState} from 'react';
import MedTitle from "../../../components/text/MedTitle.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import TextBox from "../../../components/TextBox.jsx";

function NewProjectModal(props) {
    let [name, setName] = useState("");
    return (
        <>
            <MedTitle>New Project</MedTitle>
            <TextBox setValue={setName}></TextBox>
            <PrimaryButton>Create</PrimaryButton>
        </>
    );
}

export default NewProjectModal;