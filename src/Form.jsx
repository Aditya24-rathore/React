import React, { useState } from 'react'

const Form = () => {
    const [name,setname]=useState(" ")
    const [email,setemail]=useState(" ")
    const [num,setnum]=useState(" ")
    const [pass,setpass]=useState(" ")
    

    // let change=(e)=>{
    //  setname(e.target.value)
    // }

    
    let handlesubmit=(e)=>{
      // preventDefault to stop form reloading or refresh
      e.preventDefault()
      if(name==""){
        alert("enter name")
      }
      else{alert("Registration Done")}  
    }
  return (
    <>
    <form onSubmit={handlesubmit}>
      <h1>{name}</h1>
    Enter name:<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/> <br /> <br />
    <h1>{email}</h1>
     Enter email:<input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/> <br /> <br />
     <h1>{num}</h1>
    Enter number:<input type="text" value={num} onChange={(e)=>{setnum(e.target.value)}}/> <br /> <br />
    <h1>{pass}</h1>
     Enter password:<input type="text" value={pass} onChange={(e)=>{setpass(e.target.value)}}/> <br /> <br />
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Form