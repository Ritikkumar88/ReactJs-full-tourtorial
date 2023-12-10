// mechanism to protect pages and layouts;

import { Children, useEffect , useState  } from "react"
import React from 'react'
import { UseSelector, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function Protected({childern , authentication = true}) {

    const navigate = useNavigate()
    const [loader , setLoder] = useState(true)
    const {authStatus} = useSelector(state => state.auth.status)

    useEffect(() => {

        // if (authStatus === true){
        //     navigate("/")
        // }else if(authStatus === false){
        //     navigate("/login")
        // }

        if(authentication && authStatus !== authentication){

        }else if(!authentication && authStatus !== authentication){
            navigate("/")

        }
        setLoder(false)
    } , [authStatus , navigate , authentication])

  return (
    loader ? <h1>Loading...</h1> : <>{Children}</>
  )
}

