import React, {useState} from 'react';
import styles from './stepPreview.module.css'
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import Loading from "../../../../components/Loading.jsx";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import EditableComponent from "./EditableComponent.jsx";

function StepPreview(props) {
    // const [selectedComponent, setSelectedComponent] = useState(null);
    //
    // if(!props.stepData){
    //     return (
    //         <div className={styles.selectPrompt}>
    //             <MedTitle>Select A Step...</MedTitle>
    //         </div>
    //     )
    // }
    //
    // const clickHandle = (index)=>{
    //     setSelectedComponent(index);
    // }
    //
    //
    //
    // return (
    //     <div className={styles.preview} >
    //     {
    //         props.stepData.components.map((component, index) => (
    //             <div className={styles.component} onClick={()=>{clickHandle(index)}}>
    //                 {selectedComponent===index?
    //                     <StepComponent key={index} component={component}/>:
    //                     <EditableComponent key={index} component={component}/>
    //                 }
    //             </div>
    //         ))
    //     }
    //     </div>
    // );
}

export default StepPreview;