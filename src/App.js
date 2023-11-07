import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

const [word, setWord] = useState ("")
const add = (e) => {
  setWord (e.target.value)
}


  return (
    <div>

      <p> {word} 秒</p>

      <input value = {word} onChange = {add}></input>
      <button>start</button>
      
    </div>
  );
}

export default App;
