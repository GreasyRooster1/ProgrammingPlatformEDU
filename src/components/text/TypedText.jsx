import React, {useEffect, useState} from 'react';

function TypedText(props) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const delay = props.delay??30;

    useEffect(() => {
        if(props.disableAnim){
            return;
        }
        console.log(props.text,currentText,currentIndex);

        if (currentIndex < props.text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + props.text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }

    }, [currentIndex, delay]);

    useEffect(() => {
        setCurrentIndex(0);
        setCurrentText("");
    },[props.text])

    return (
        <span className={`${props.className}`}>{currentText}</span>
    );
}

export default TypedText;