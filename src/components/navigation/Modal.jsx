import React from 'react';
import ScreenPage from "../screenPage/ScreenPage.jsx";
import styles from "./modal.module.css";

function Modal(props) {

    const handleClick = (event)=>{
        console.log("asd");
        if(event.target===event.currentTarget && props.hideCallback!==undefined){

            props.hideCallback()
        }
    }

    return (
        <div className={styles.overlay} onClick={handleClick}>
            <div className={styles.modal}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;