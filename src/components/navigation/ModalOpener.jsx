import React, {useState} from 'react';
import ScreenPage from "../screenPage/ScreenPage.jsx";
import styles from "./modal.module.css";
import Modal from "./Modal.jsx";

function ModalOpener(props) {
    let [active, setActive] = useState(false);

    let closeModal = () => {
        setActive(false);
    }

    return (
        <>
        {active && <Modal hideCallback={()=>setActive(false)}>{
            React.cloneElement(props.modalContent, { closeModal: closeModal})
        } </Modal>}
            <div onClick={()=>setActive(!active)}>
                {props.children}
            </div>
        </>
    );
}

export default ModalOpener;