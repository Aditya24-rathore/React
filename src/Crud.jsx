import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Crud = () => {
  const [data,setdata]=useState([])
    useEffect(
        ()=>{

      axios.get('http://localhost:3000/hotel').then((res)=>{
        setdata(res.data)
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
      

        },[]
    )
    let del=(id)=>{
         axios.delete(`http://localhost:3000/hotel/${id}`)
    }
  return (
    <>
    <h1>Show data</h1>
    <div>
      
        <table border="1px solid black" cellSpacing="" cellPadding="20px">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((e)=>(
             <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.city}</td>
              <td><button onClick={()=>{del(e.id)}}>Delete</button></td>
             </tr>
    
            ))
          }
          </tbody>
        </table>
        
    </div>
    </>
  )
}

export default Crud