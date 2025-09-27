import React from 'react'

const Map = () => {
    let Fruits=["apple","mango","orange","banana","grapes"]
    let data=[{
        name:"aditya",
        age:20,
        city:"Bhopal",
        contact:9087267829
    }]
  return (
    <>
    <ul>
        <h1>Fruits</h1>
        {Fruits.map((e , index)=>(
            <li key={index}> {e}</li>
        ))}
    </ul>

<ul>
        <h1>Data</h1>
        {data.map((e1 , index1)=>(
            <li key={index1}> {e1.name}</li>
            
        ))}
    </ul>
    </>
  )
}

export default Map