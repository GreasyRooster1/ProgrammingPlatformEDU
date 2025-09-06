import React, {cloneElement, useEffect, useState} from 'react';

import styles from "./iconButton.module.css"

function IconButton(props) {
    let [highlight, setHighlight] = useState(null);
    let [hoverHighlight, setHoverHighlight] = useState(null);
    useEffect(() => {
        if(props.isHighlighted||hoverHighlight) {
            setHighlight(true);
        }
        if(!props.isHighlighted&&!hoverHighlight) {
            setHighlight(false);
        }
    }, [props.isHighlighted,hoverHighlight]);

    const handleMouseEnter = () => {
        setHoverHighlight(true);
    };

    const handleMouseLeave = () => {
        setHoverHighlight(false );
    };

    return (
        <>
            {cloneElement(props.icon,{
                className: `${props.className} ${styles.icon} ${highlight?styles.highlight:""}`,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                ...props
            })}
        </>
    );
}

export default IconButton;