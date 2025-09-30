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
                if (trimmed.startsWith(s+" ")||trimmed==s) {
                    return {style:rule.style,content:line.replace(s, '')}
                }
            }
        }

        for(let rule of surroundRules) {
            let trimmed = line.trim()
            for(let s of rule.sym) {
                if (trimmed.startsWith(s)&&trimmed.endsWith(s)) {
                    let newLine = line.replace(s,'')
                    newLine = newLine.split("").reverse().join("").replace(s,'')
                    newLine = newLine.split("").reverse().join("")
                    return {style:rule.style,content:newLine}
                }
            }
        }

        return {style:"",content:line}
    }

    useEffect(() => {
        let lines = props.text.split('\n');
        let elClassPairs = []

        for(let line of lines) {
            elClassPairs.push(forEachLine(line))
        }

        setElemnts(elClassPairs);
    }, [props.text]);

    return (
        <span>{
            elements.map((elem,index)=>{
                return (
                    <>
                        <span key={index} className={elem.style}>{elem.content}</span><br />
                    </>
                )
            })
        }</span>
    );
}


export default Markdown;