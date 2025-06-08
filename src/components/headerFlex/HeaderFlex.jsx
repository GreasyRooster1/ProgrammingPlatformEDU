import React from 'react';
import styles from "./headerFlex.module.css"

function HeaderFlex(props) {
    return (
        <div className={`${styles.wrapper} ${props.className??""}`}>
            <div className={`${styles.head} ${props.headClassName??""}`}>
                {props.headContent}
            </div>
            <div className={`${styles.body} ${props.bodyClassName??""}`}>
                {props.children}
            </div>
        </div>
    );
}

export default HeaderFlex;