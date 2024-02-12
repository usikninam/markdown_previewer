import './App.css';
import { useState } from 'react'
import Editor from './Editor';
import Preview from './Preview';

function App() {

  const [text, setText] = useState("");

  return (
    <div>
      <Editor setText={setText} text={text} />
      <Preview text={text} />
    </div>
  );
}

export default App;
