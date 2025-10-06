import React, { useCallback } from 'react'
import mycontext from './mycontext'
import { createContext } from 'react'
import { useContext } from 'react'



const Propdrilling = () => {
    const data=useContext(mycontext)
  return (
    <>
    <h1>My name is {data.name}</h1>
    <p>My age is {data.age}</p>
    <p>My city is {data.city}</p>
    </>
  )
}

export default Propdrilling