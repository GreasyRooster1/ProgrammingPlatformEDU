import SingleFileLanguageType from "../SingleFileLanguageType.jsx";
import P5jsExecutor from "../Executors/P5jsExecutor.jsx";

function P5jsType(props){
    return (
        <SingleFileLanguageType
            executor={(
                <P5jsExecutor />
            )}
            {...props}
        />
    )
}

export default P5jsType;