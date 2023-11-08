import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // ****hook**** using state to set the state in UI;
  let [counter , setCounter] = useState(0)


  // variable
  // let counter = 5;

  // function for onclick button on add counter
  const addValue = () => {
    console.log("clicked" , counter);
    counter = counter+1;
    setCounter(counter)
  }

  // function for onclick button on remove counter
  const removeValue = () => {
    console.log("removebtn Clicked" , counter);
    counter= counter-1;
    setCounter(counter);
  }



  return (
    <>
        <h1>Ritik shroff hook learning </h1>
        <h2>counter Value: {counter}</h2>
        <button
        onClick={addValue}
        >Add value : {counter}</button>
        <hr />
        <button 
        onClick= {removeValue}
        >Remove value : {counter}</button>
        <p>Footer : {counter}</p>
    </>
  )
}

export default App
