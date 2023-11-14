import { useState, useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {

  // using state hook***********
  const [length, SetLenght] = useState(8);
  const [isNum, setIsnum] = useState(false);
  const [isChar, setIschar] = useState(false);
  const [password, setPasssword] = useState("");
  // using state***********

  // using useref Hook for copying the text inside my input;
  const passwordRef = useRef(null)
  // using useref Hook for copying the text inside my input; 
  

  // creating Password genrator method; and using callback hook*******
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWYZqwertyuioplkjhgfdsazxcvbnm";
    if (isNum) str += "0123456789";
    if (isChar) str += "!@#$%^&*";

    // from this loop we will get a index of str;
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPasssword(pass);

  }, [length, isNum, isChar])

  // onclick function for copy button;
  const copyPassToClipBord = useCallback(() => {passwordRef.current?.select() , window.navigator.clipboard.writeText(password)} , [password])

  // using use effect hook for running password grnrator function***********
  useEffect(()=>{
    passwordGenrator()
  } , [length, isNum, isChar, passwordGenrator])
  // using useeffect hook***********

  return (
    <>
      <h1>Pass-Word Genrator 😍</h1>
      <div>
        <input className='input-1' type="text" value={password} placeholder='Password' readOnly ref={passwordRef}/>
        <button className='input-1 btn' onClick={copyPassToClipBord}>Copy</button>
      </div>

      <div>
        <input className='input-1 ptr' type="range" onChange={(e) => { SetLenght(e.target.value) }} min={8} max={16} value={length} />
        <label htmlFor="">Lenght: {length}</label>
      </div>

      <div>
        <input type="checkbox" defaultChecked = {isNum} id='numInput' onChange={() => {setIsnum((prev) => !prev)}}/>
        <label htmlFor="">Numbers</label>
      </div>

      <div>
        <input type="checkbox" defaultChecked = {isChar} id='charInput' onChange={() => {setIschar((prev) => !prev)}}/>
        <label htmlFor="">Charecters</label>
      </div>
    </>
  )
}

export default App
