import React from 'react';
import styles from './primaryButton.module.css'

function PrimaryButton(props) {
    const clickHandle = ()=>{
        if(!props.inactive){
            props.onClick()
        }
    }

    return (
        <div className={`${styles.primaryButton} ${props.className??""} ${props.inactive?styles.inactive:""}`} onClick={clickHandle}>
            <span>
                {props.children}
                {props.icon&& <img className={styles.icon} src={props.icon} alt="*"/>}
            </span>
        </div>
    );
}

export default PrimaryButton;
