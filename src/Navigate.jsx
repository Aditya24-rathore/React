import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
    let navigate=useNavigate()
  return (
   <button onClick={()=>{navigate("/nav.jsx")}}>Google</button>
  )
}

export default Navigate