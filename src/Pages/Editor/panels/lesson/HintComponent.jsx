import React from 'react';
import MedTitle from "../../../../components/text/MedTitle.jsx";
import BlockQuote from "../../../../components/text/BlockQuote.jsx";

function HintComponent(props) {
    return (
        <BlockQuote>{props.component.text}</BlockQuote>
    );
}

export default HintComponent;