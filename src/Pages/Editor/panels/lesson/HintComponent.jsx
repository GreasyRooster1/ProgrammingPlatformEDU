import React, {useState} from 'react';
import MedTitle from "../../../../components/text/MedTitle.jsx";
import BlockQuote from "../../../../components/text/BlockQuote.jsx";
import SmallTitle from "../../../../components/text/SmallTitle.jsx";
import DropdownIcon from "../../../../icons/DropdownIcon.svg?react"

function HintComponent(props) {
    const [open, setOpen] = useState();

    return (
        <BlockQuote>
            <div onClick={()=>{setOpen(!open)}}>
                {props.component.title}
                <DropdownIcon />
            </div>
            {open && <span>{props.component.text}</span>}
        </BlockQuote>
    );
}

export default HintComponent;