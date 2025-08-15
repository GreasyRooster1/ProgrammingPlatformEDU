import React from 'react';
import styles from "./project.module.css"

function Project(props) {
    return (
        <div className={styles.item}>
            <span className={styles.title}>Title</span>
            <span className={styles.extras}>
                <span className={styles.age}>5d Ago</span>
                <span className={styles.type}>Javascript</span>
            </span>
        </div>
    );
}

export default Project;