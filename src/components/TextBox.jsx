import React, {useEffect, useState} from 'react';
import styles from './textBox.module.css';

function TextBox(props) {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        props.setValue(value);
        console.log(value)
        if(value.length) {
            setValid(props.validate?.(value));
        }
    },[value])

    return (
        <input
            className={`${styles.textBox} ${props.className} ${valid?"":styles.invalid}`}
            type={'text'}
            value={value}
            onChange={handleChange}
            placeholder={props.placeholder}
        >

        </input>
    );
}

export default TextBox;