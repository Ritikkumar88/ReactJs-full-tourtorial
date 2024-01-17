import React from "react";
import { useState , useContext} from "react";
import UserContext from "../context/UserContext";


function Login(){

    const [userName , setusername] = useState('')
    const [password , Setpassword] = useState('')

    // usecontext syntext;
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
            e.preventDefault()
            setUser({userName  , password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={userName}
            onChange={(e) => {
                setusername(e.target.value)
            }}
            placeholder="UserName" />

            {" "}

            <input type="password" 
            value={password}
            onChange={(e) => {
                Setpassword(e.target.value)
            }}

            placeholder="Password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;