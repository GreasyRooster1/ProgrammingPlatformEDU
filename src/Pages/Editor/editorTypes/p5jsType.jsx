
import EditorType from "../EditorType.jsx";
import SingleFileLanguageType from "../SingleFileLanguageType.jsx";
import Executor from "../Executor.jsx";

function P5jsType(props){
    return (
        <SingleFileLanguageType
            executor={(
                <Executor />
            )}
            {...props}
        />
    )
}

export default P5jsType;