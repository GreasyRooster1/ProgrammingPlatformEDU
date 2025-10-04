import React from 'react';
import styles from "./dropdown.module.css"

function Dropdown(props) {
    return (
        <select className={styles.dropdown} onChange={props.onChange} value={props.value} >
            {
                props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))
            }
        </select>
    );
}

export default Dropdown;