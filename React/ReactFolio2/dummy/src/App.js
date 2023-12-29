import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const[text,setText]= useState('');
  const[name,setName]=useState('love');
  //variation 1 -> Every Render
  // useEffect(() => {
  //   console.log("UI Rendering Done");
  // })


  //variation-2 -> First Render

  // useEffect(() => {
  //   console.log("UI Rendering Done");
    
  // },[])

  //variation 3->first render + whenever dependency changed
  // useEffect(() => {
  //   console.log("change observerd");
  // }, [name]);

  //variation 4->to handle unmounting of a component
  useEffect(() => {
    console.log("Listner added");

    return() => {
      console.log("Listner removed");
    }
  },[text]);

  function changeHandler(event) {
    
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
     <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
