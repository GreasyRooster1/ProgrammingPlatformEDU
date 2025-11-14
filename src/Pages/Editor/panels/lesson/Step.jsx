import React from 'react';
import {Box} from "@radix-ui/themes";
import styles from './step.module.css'

function Step(props) {
    return (
        <Box height={{lg:"200px"}} className={styles.step} m="2">
            {props.step.type}
        </Box>
    );
}

export default Step;