import React, { useState } from 'react'

const Form = () => {
    const [name,setname]=useState()
    let change=(e)=>{
     setname(e.target.value)
    }
    
  return (
    <>
    <h1>{name}</h1>
    <input type="text" onChange={change}/>
    </>
  )
}

export default Form