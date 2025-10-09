import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Crud = () => {
    useEffect(
        ()=>{

      axios.get("http://localhost:3000/hotel").then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })

        },[]
    )
  return (
    <>
    <h1>Show Data</h1>

    </>
  )
}

export default Crud