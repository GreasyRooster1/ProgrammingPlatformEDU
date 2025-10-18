import React, {useEffect, useState} from 'react';
import styles from './textBox.module.css';

function TextBox(props) {
    const [value, setValue] = useState(props.value??'');
    const [valid, setValid] = useState(true);



    const handleChange = (event) => {
        props.setValue(event.target.value);
    };

    useEffect(() => {
        if(props.value.length&&props.value.validate) {
            setValid(props.validate?.(value));
        }
    },[props.value])


    return (
        <input
            className={`${styles.textBox} ${props.className} ${valid?"":styles.invalid}`}
            type={'text'}
            value={props.value??''}
            onChange={handleChange}
            placeholder={props.placeholder}
        >

        </input>
    );
}

export default TextBox;