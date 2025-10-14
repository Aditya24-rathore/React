import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Crud = () => {
  const [data,setdata]=useState([])
  const[editid,seteditid]=useState(false)
  const getdata=()=>{
     axios.get('http://localhost:3000/hotel').then((res)=>{
        setdata(res.data)
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
  }
  const openform=(user)=>{
    seteditid(user)
    setformdata({
            name:user.name,age:user.age,city:user.city,checkin:user.heckin,checkout:user.checkout,person:user.person
        })
  }
    useEffect(
        ()=>{
  getdata()
        },[]
    )
    let del=(id)=>{
         axios.delete(`http://localhost:3000/hotel/${id}`)
         getdata()
         
    }
    const handleupdate=(e)=>{
      e.preventDefault()
      axios.put(`http://localhost:3000/hotel/${editid.id}`,formdata)
    }

    const changeinp=(e)=>{
      setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const [formdata,setformdata]=useState({
            name:"",age:"",city:"",checkin:"",checkout:"",person:""
        })
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
              <th>Edit</th>
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
              <td><button onClick={()=>{openform(e)}}>Edit</button></td>
             </tr>
    
            ))
          }
          </tbody>
        </table>
        
        {
          editid && (<form onSubmit={handleupdate}>
        Enter name : <input type="text" name='name' value={formdata.name} onChange={changeinp}/> <br /><br />
        Enter age : <input type="text" name='age' value={formdata.age} onChange={changeinp}/> <br /><br />
        Enter city : <select  id="" name='city' value={formdata.city} onChange={changeinp}>
            <option value="Bhopal">Bhopal</option>
            <option value="Indore">Indore</option>
            <option value="Sehore">Sehore</option> 
        </select><br /><br />
        Enter checkin : <input type="date" name='checkin' value={formdata.checkin} onChange={changeinp}/> <br /><br />
        Enter checkout : <input type="date" value={formdata.checkout} name='checkout' onChange={changeinp}/> <br /><br />
        Enter person : <input type="text" value={formdata.person} name='person' onChange={changeinp} /> <br /><br />
        <button type='submit'>Book now</button>
    </form>)
        }
    </div>
    </>
  )
}

export default Crud