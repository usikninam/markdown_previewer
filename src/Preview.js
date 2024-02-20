import { marked } from 'marked';

export default function Preview(props) {
    const html = marked.parse(props.text);

    return (
        <div id="preview">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}