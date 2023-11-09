import { useState , useCallback} from 'react'


function App() {
  const [Lenght, SetLenght] = useState(8);
  const [numberAllowed , SetnumberAllowed] = useState(false);
  const [cherAllow , SetCherAllow] = useState(false);
  const [Password , SetPassword] = useState("");

  // function to genrate password; here we are using call back hook;
  const PasswordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "0123456789";
    if(cherAllow) str+= "!@#$%^&*_";

    for(let i =1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass = str.charAt(char)
    }
    SetPassword(pass);

} , [length, numberAllowed, cherAllow, SetPassword]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 px-3 m-4 rounded-lg' placeholder='Password' readOnly/>
          <button className='m-6'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={28}
            value={length} className='cursor-pointer m-4'/>
            <label >Lenght: {Lenght}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
