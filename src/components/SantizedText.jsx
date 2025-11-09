import React from 'react';
import DOMPurify from 'dompurify';

function SanitizedText(props) {
    const options = {ALLOWED_TAGS: ['em','b',"strong"]};
    const cleanHTML = DOMPurify.sanitize(props.content, options);

    // Use dangerouslySetInnerHTML to render the sanitized HTML
    return <span dangerouslySetInnerHTML={{ __html: cleanHTML }} />
}

export default SanitizedText;