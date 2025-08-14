import React from 'react';
import styles from './homeGridItem.module.css';

function HomeGridItem(props) {
    return (
        <div className={styles.item}>
            <div className={styles.inner}>
                {props.children}
            </div>
        </div>
    );
}

export default HomeGridItem;