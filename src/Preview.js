import { marked } from 'marked';

export default function Preview(props) {
    const html = marked.parse(props.text);

    return (
        <div id="preview">
            <h1>Preview component</h1>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    );
}