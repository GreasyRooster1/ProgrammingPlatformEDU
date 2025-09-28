import React, {useEffect} from 'react';
import styles from "./markdown.module.css"

function Markdown(props) {
    const [elements, setElemnts] = React.useState([]);
    const surroundRules = [
        {style:styles.bold,sym:["**","__"]},
        {style:styles.italic,sym:["*","_"]},
        {style:styles.inlineCode,sym:["`","`"]}
    ]

    const lineStarterRules = [
        {style:styles.heading1,sym:["#"]},
        {style:styles.heading2,sym:["##"]},
        {style:styles.blockQuote,sym:[">"]},
        {style:styles.uList,sym:["*","-"]},
        {style:styles.line,sym:["---","***"]},
    ]

    const forEachLine = (line)=>{
        for(let rule of lineStarterRules) {
            let trimmed = line.trimStart()
            for(let s of rule.sym) {
                if (trimmed.startsWith(s+" ")) {
                    return rule.style
                }
            }
        }

        for(let rule of surroundRules) {
            let trimmed = line.trim()
            for(let s of rule.sym) {
                if (trimmed.startsWith(s)&&trimmed.endsWith(s)) {
                    return rule.style
                }
            }
        }

        return ""
    }

    useEffect(() => {
        let lines = props.text.split('\n');
        let elClassPairs = []

        for(let line of lines) {
            elClassPairs.push({
                style:forEachLine(line),
                content:line,
            })
        }

        setElemnts(elClassPairs);
    }, [props.text]);

    return (
        <span>{
            elements.map((elem,index)=>{
                return (<span key={index} className={elem.style}>{elem.content}</span>)
            })
        }</span>
    );
}


export default Markdown;