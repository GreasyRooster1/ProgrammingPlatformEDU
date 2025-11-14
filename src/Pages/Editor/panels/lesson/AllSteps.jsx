import React from 'react';
import {Flex} from "@radix-ui/themes";
import Step from "./Step.jsx";

function AllSteps(props) {
    return (
        <Flex direction="column" justify="space-around">
            {props.lessonData.steps.map((step, index) => (
                <Step key={index} step={step}></Step>
            ))}
        </Flex>
    );
}

export default AllSteps;