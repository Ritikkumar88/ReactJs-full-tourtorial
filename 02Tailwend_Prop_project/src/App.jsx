import { useState } from 'react'
import './App.css'
import Cards from './Components/cards'

function App() {
  const [count, setCount] = useState(0)

  // declairing object for props;
  let myObj = {
    username: "Ritik",
    age: 21
  }

  // declairing array for props;
  let newArr = [1,2,3,45,6,7,8,9,12,12];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>Tailwind test</h1>
      <Cards username= " : chaiorcode" player_name = "Virat kohli" someObj = {newArr}/>
      <Cards username=" : Ritik shroff" player_name = "Rohit Sharma"/>
      <Cards username=" : Hum jeetenge" player_name = " kohli"/>
      <Cards username=" : Hum jeetenge" />
    </>
  )
}

export default App
