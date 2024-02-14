import './App.css';
import { useState } from 'react'
import Editor from './Editor';
import Preview from './Preview';

function App() {


  // a header (H1 size)
  // a sub header (H2 size)
  // a link
  // inline code
  // a code block
  // a list item
  // a blockquote
  // an image,
  // bolded text
  const defaultText = "# Heading\n*italic*\n**bold**\n### heading3\n```code```";

  const [text, setText] = useState(defaultText);

  return (
    <div>
      <Editor setText={setText} text={text} />
      <Preview text={text} />
    </div>
  );
}

export default App;
