import React, {useState} from 'react';
import MedTitle from "../../../components/text/MedTitle.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import TextBox from "../../../components/TextBox.jsx";
import LanguageSelector from "./LanguageSelector.jsx";

function NewProjectModal(props) {
    let [name, setName] = useState("");
    return (
        <>
            <MedTitle>New Project</MedTitle>
            <TextBox placeholder={"Enter a name..."} setValue={setName}></TextBox>
            <LanguageSelector />
            <PrimaryButton>Create</PrimaryButton>
        </>
    );
}

export default NewProjectModal;