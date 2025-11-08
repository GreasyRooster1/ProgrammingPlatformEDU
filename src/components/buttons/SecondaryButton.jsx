import React from 'react';
import styles from './secondaryButton.module.css'
import {Button} from "@radix-ui/themes";

function SecondaryButton(props) {
    return (
        <Button
            color="gray"
            variant="outline"
            {...props}
        >
            {props.children}
        </Button>
    );
}

export default SecondaryButton;
