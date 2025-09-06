import React, {cloneElement, useEffect, useState} from 'react';

import styles from "./iconButton.module.css"

function IconButton(props) {
    let [highlight, setHighlight] = useState(null);
    useEffect(() => {
        setHighlight(
            props.isHighlighted?true:highlight
        );
    }, [props.isHighlighted]);

    return (
        <>
            {cloneElement(props.icon,{
                className: `${props.className} ${styles.icon} ${highlight?styles.highlight:""}`,
                ...props
            })}
        </>
    );
}

export default IconButton;