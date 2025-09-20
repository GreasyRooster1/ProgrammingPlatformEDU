import React, {useEffect, useState} from 'react';
import styles from './textBox.module.css';

function TextBox(props) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        props.setValue(value);
    },[value])

    return (
        <input
            className={`${styles.textBox} ${props.className}`}
            type={'text'}
            value={value}
            onChange={handleChange}
        >

        </input>
    );
}

export default TextBox;