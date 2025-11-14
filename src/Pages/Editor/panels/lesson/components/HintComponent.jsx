import React, {useState} from 'react';
import MedTitle from "../../../../../components/text/MedTitle.jsx";
import SmallTitle from "../../../../../components/text/SmallTitle.jsx";
import DropdownIcon from "../../../../../icons/DropdownIcon.svg?react"

import styles from "../stepComponent.module.css";
import {Blockquote, Text} from "@radix-ui/themes";

function HintComponent(props) {
    const [open, setOpen] = useState(props.isEditor??false);

    return (
        <Blockquote>
            <div className={styles.hintHead} onClick={()=>{setOpen(!open)}}>
                <Text size="3" weight="bold">{props.component.title}</Text>
                <DropdownIcon className={styles.hintArrow}/>
            </div>
            {open && <Text size="2">{props.component.text}</Text>}
        </Blockquote>
    );
}

export default HintComponent;