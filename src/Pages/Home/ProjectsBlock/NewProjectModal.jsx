import React, {useState} from 'react';
import MedTitle from "../../../components/text/MedTitle.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import TextBox from "../../../components/TextBox.jsx";
import LanguageSelector from "./LanguageSelector.jsx";

import jsIcon from "../../../icons/lang/js.svg";

import styles from "./newProjectModal.module.css";

function NewProjectModal(props) {
    let [name, setName] = useState("");
    return (
        <>
            <div className={styles.head}>
                <MedTitle>New Project</MedTitle>
                <TextBox placeholder={"Enter a name..."} setValue={setName}></TextBox>
            </div>
            <LanguageSelector languages={[
                {name:"Javascript",icon:jsIcon,desc:"d"},
                {name:"Javascript1",icon:jsIcon},
                {name:"Javascript2",icon:jsIcon},
                {name:"Javascript3",icon:jsIcon},
                {name:"Javascript4",icon:jsIcon},
            ]}/>
            <PrimaryButton className={styles.create}>Create</PrimaryButton>
        </>
    );
}

export default NewProjectModal;