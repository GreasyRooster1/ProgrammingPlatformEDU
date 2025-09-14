import SingleFileLanguageType from "../SingleFileLanguageType.jsx";
import P5jsExecutor from "../Executors/DomainExecutor.jsx";

function P5jsType(props){
    return (
        <SingleFileLanguageType
            executor={(
                <P5jsExecutor projectMetadata={props.projectMetadata}/>
            )}
            {...props}
        />
    )
}

export default P5jsType;