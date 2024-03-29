import { marked } from 'marked';

export default function Preview(props) {

    // Set options https://marked.js.org/using_advanced
    marked.use({
        gfm: true,
        breaks: true
    });

    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.text) }}></div>
    );
}