import React from 'react';
import styles from "./project.module.css"

function Project(props) {
    return (
        <div className={styles.item}>
            <span className={styles.title}>Title</span>
        </div>
    );
}

export default Project;