import React from 'react';
import {Box} from "@radix-ui/themes";

function Step(props) {
    return (
        <Box>
            {props.step.type}
        </Box>
    );
}

export default Step;