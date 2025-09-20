import React, {useState} from 'react';
import ScreenPage from "./screenPage/ScreenPage.jsx";
import styles from "./modal.module.css";
import Modal from "./Modal.jsx";

function ModalOpener(props) {
    let [active, setActive] = useState(false);
    return (
        <>
            {active && <Modal hideCallback={()=>setActive(false)}/>}
            <div onClick={()=>setActive(!active)}>
                {props.children}
            </div>
        </>
    );
}

export default ModalOpener;