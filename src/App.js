import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

const [word, setWord] = useState ("")
const [count, setCount] = useState ()
const [timeOut, setTimeout] = useState (0)

const addNumber = (e) => {
  setWord (e.target.value)
}

const countDown = () =>{
  setTimeout(()=>{
    let a = 0
    console.log ( a + 1)

    // let a = 0
    // console.log(a+1)
    // return (a)
},1000)
}



// function countDown  (){
//   setCount ( function (a){
//     return a + 100
//   })

// }


  return (
    <div>
      {timeOut}

      <p> {countDown} 秒</p>

      <input value = {word} onChange = {addNumber}></input>
      <button onClick = {countDown}>start</button>
      
    </div>
  );
}

export default App;
