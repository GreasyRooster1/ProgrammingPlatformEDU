import React, {useEffect, useState} from 'react';

function LimitText(props) {
    const [text, setText] = useState('');

    useEffect(() => {
        if (typeof props.children !== 'string' && typeof props.children !== 'number') {
            setText("Cannot render!");
            return;
        }
        let str = props.children.toString();
        if(str.length>=props.maxLength){
            setText(
                str.substring(0,props.maxLength-2)+"..."
            );
            return;
        }
        setText(str);
    }, [props.children,props.maxLength]);

    return (
        <span className={`${props.className}`}>
            {text}
        </span>
    );
}

export default LimitText;