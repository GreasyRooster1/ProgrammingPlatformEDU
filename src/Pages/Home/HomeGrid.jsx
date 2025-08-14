import React from 'react';
import styles from './homeGrid.module.css';

function HomeGrid(props) {
    return (
        <div className={styles.grid}>
            {props.children}
        </div>
    );
}

export default HomeGrid;