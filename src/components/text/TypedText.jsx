import React, {useEffect, useState} from 'react';

function TypedText(props) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const delay = props.delay??30;

    useEffect(() => {
        if(props.disableAnim){
            return;
        }

        if (currentIndex < props.text) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }

    }, [props.text]);

    return (
        <span className={`${props.className}`}>{currentText}</span>
    );
}

export default TypedText;