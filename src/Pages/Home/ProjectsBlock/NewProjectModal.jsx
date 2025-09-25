import React, {useState} from 'react';
import MedTitle from "../../../components/text/MedTitle.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import TextBox from "../../../components/TextBox.jsx";
import LanguageSelector from "./LanguageSelector.jsx";

import jsIcon from "../../../icons/lang/js.svg";

import styles from "./newProjectModal.module.css";
import {net} from "../../../api/net/net.js";
import {useAuth} from "react-oidc-context";
import {useReqState} from "../../../api/net/netutils.js";

function NewProjectModal(props) {
    let auth = useAuth();
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [requestState, setRequestState] = useReqState();
    let [name, setName] = useState(null);

    const validateText = (text)=>{
        return text.length > 0 && text.length <= 100;
    }

    const createProject = () => {
        if(name===null){return;}
        if(name.length < 1||name.length > 100){return;}
        if(selectedLanguage===null){return;}

        net.proj.checkRefExists(auth.user?.access_token,[name],setRequestState)
    }

    return (
        <>
            <div className={styles.head}>
                <MedTitle>New Project</MedTitle>
                <TextBox placeholder={"Enter a name..."} setValue={setName} validate={validateText}></TextBox>
            </div>
            <LanguageSelector languages={[
                {name:"Javascript",icon:jsIcon,desc:"Javascript is a beginner friendly language perfect for learning the basics! This template comes with built in graphics support for making games and apps"},
                {name:"Javascript1",icon:jsIcon},
                {name:"Javascript2",icon:jsIcon},
                {name:"Javascript3",icon:jsIcon},
                {name:"Javascript4",icon:jsIcon},
            ]} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
            <PrimaryButton className={styles.create} inactive={selectedLanguage===null||name===null} onClick={createProject}>Create</PrimaryButton>
        </>
    );
}

export default NewProjectModal;