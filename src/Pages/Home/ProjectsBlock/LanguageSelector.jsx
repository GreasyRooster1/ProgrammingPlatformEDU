import React, {useState} from 'react';
import styles from "./languageSelector.module.css"

function LanguageSelector(props) {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    let clickHandle = (language)=>{
        setSelectedLanguage(language)
    }
    let getSelectedClass = (language) => {
        if(!selectedLanguage){
            return "";
        }
        return selectedLanguage.name === language.name ? styles.selected : "";
    }

    return (
        <div className={styles.container}>
            <div className={styles.selector}>
                {
                    props.languages.map((language) => (
                        <div key={language.name} className={`${styles.item} ${getSelectedClass(language)}`} onClick={()=>{clickHandle(language)}} >
                            <img src={language.icon} />
                            <span className={styles.itemName}>{language.name}</span>
                        </div>
                    ))
                }
            </div>
            {/*<div className={styles.desc}>{*/}
            {/*    selectedLanguage?.desc*/}
            {/*}</div>*/}
        </div>
    );
}

export default LanguageSelector;