import React, {useEffect} from 'react';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Code} from "@radix-ui/themes";


function LessonMarkdown(props) {
    let options = {

    }
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            options={options}

            components={{
                code(props) {
                    const {children, className, node, ...rest} = props
                    return (
                        <Code variant="soft" className={className}>{children}</Code>
                    )
                }
            }}
        >
            {props.content}
        </Markdown>
    )
}


export default LessonMarkdown;