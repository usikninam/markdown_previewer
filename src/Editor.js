export default function Editor(props) {

    const handleChange = (e) => {
        e.preventDefault();
        props.setText(e.target.value)
    }

    return (
        <textarea id="editor" onChange={handleChange} value={props.text}></textarea>
    );
}
