import React from 'react';
import ScreenPage from "./screenPage/ScreenPage.jsx";
import styles from "./modal.module.css";

function Modal(props) {

    const handleClick = (event)=>{
        if(event.target===event.currentTarget && props.hideCallback!==undefined){
            props.hideCallback()
        }
    }

    return (
        <ScreenPage className={styles.overlay} onClick={handleClick}>
            <div className={styles.modal}>

            </div>
        </ScreenPage>
    );
}

export default Modal;