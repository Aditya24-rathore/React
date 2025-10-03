import React, { useState } from 'react'

const Rendering = () => {

//     let [login,setlogin]=useState(false)
//     let ans 
//     if(login){
//         ans=<h1>welcome</h1>
//     }
//     else{
//         ans= <h1>please login</h1>
//     }
//   return (
//     <>
//     {ans}
//     <button onClick={()=>{setlogin(!login)}}>{login ? "Logout" : "Login"}</button>

let [login,setlogin]=useState(false)
    let ans 
    if(login){
        ans=<h1>Dark Mode Activated</h1>
    }
    else{
        ans= <h1>LightMode Activated</h1>
    }

let [color,setcolor]=useState(false)
let [message,setmessage]=useState(false)

  return (
    <>
    <div style={{height:"100px",width:"200px",backgroundColor:color?"black":"white"}}>
    </div>
    <button onClick={()=>{setcolor(!color)}}>{color?"Darkmode activated":"Lightmode activated"}</button>
    {ans}
    <button onClick={()=>{setlogin(!login)}}>{login ? "Light Mode" : "Dark Mode"}</button>
    {message && <h1>Hello World</h1>}
    <button onClick={()=>{setmessage(!message)}}>{message?"Hidemessage":"Showmessage"}</button>
    </>
  )
}

export default Rendering