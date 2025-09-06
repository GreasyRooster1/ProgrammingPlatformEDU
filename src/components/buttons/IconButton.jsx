import React, {cloneElement} from 'react';

import styles from "./iconButton.module.css"

function IconButton(props) {
    return (
        <>
            {cloneElement(props.icon,{
                className: `${props.className} ${styles.icon}`,
            })}
        </>
    );
}

export default IconButton;