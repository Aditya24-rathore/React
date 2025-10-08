import React, { useEffect, useState } from 'react'

const useefect = () => {
    let [count,setcount]=useState(0)
    useEffect(()=>{
      console.log("running")
    },[count])
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}>Increment</button>
    <button onClick={()=>{setcount(count-1)}}>Decrement</button>
    <button onClick={()=>{setcount(0)}}>Reset</button>
    </>
  )
}

export default useefect