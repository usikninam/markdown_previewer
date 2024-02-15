import './App.css';
import { useState } from 'react'
import Editor from './Editor';
import Preview from './Preview';

function App() {

  const multilineCode = "```\n// a code block:\nfunction anotherExample(firstLine, lastLine){\n if (firstLine == '```' && lastLine == '```'){\n  return multiLineCode;\n }\n}\n```\n";

  const defaultText = "# a header (H1 size)\n" +
    "## a sub header (H2 size)\n" +
    "[a link](https://google.com)\n" +
    "some `int answer = 42;` inline code \n" +
    multilineCode +
    "- a list item\n" +
    ">a blockquote\n" +
    "![an image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n" +
    "**bolded text**\n";

  const [text, setText] = useState(defaultText);

  return (
    <div>
      <Editor setText={setText} text={text} />
      <Preview text={text} />
    </div>
  );
}

export default App;
