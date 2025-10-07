import React, { useCallback, useState } from 'react'
import mycontext from './mycontext'
import { createContext } from 'react'
import { useContext } from 'react'



const Propdrilling = () => {
    // const data=useContext(mycontext)
    // const theme=useContext(mycontext)
    // const {num1,num2}=useContext(mycontext)
    // const {num}=useContext(mycontext)
    const theme=useContext(mycontext)
    const[mytheme,setmytheme]=useState(false)
  
  
  return (
    <>
    {/* <h1>My name is {mydata.name}</h1>
    <p>My age is {mydata.age}</p>
    <p>My city is {mydata.city}</p>
    <p>My hobby is {hobby[0]}</p>
    <p>sum of two num is {num.num1+num.num2}</p> */}

    <div style={theme}>

       <button onClick={()=>{setmytheme(mytheme?theme.dark:theme.light)}}>Click</button>
    </div>
    </>
  )
}

export default Propdrilling