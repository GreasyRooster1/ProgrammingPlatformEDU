import React from 'react';

import styles from "./tabGroup.module.css";

function Tab(props) {
    let onClick = ()=>{
        props.handle(props.tab);
    }

    return (
        <div onClick={onClick} className={styles.tab}>
            <span>{props.tab.name}</span>
        </div>
    );
}

export default Tab;