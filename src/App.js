import './App.css';
import { useState } from 'react'
import Editor from './Editor';
import Preview from './Preview';
import Wrapper from './Wrapper';

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
    <div className="app container-fluid">
      <div className="row">
        <div className="col-md-6">
          <Wrapper componentName={"Editor"}>
            <Editor setText={setText} text={text} />
          </Wrapper>
        </div>
        <div className="col-md-6">
          <Wrapper componentName={"Preview"}>
            <Preview text={text} />
          </Wrapper>
        </div>
      </div>
    </div >
  );
}

export default App;
