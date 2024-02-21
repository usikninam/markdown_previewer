import { marked } from 'marked';

export default function Preview(props) {

    return (
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.text) }}></div>
    );
}