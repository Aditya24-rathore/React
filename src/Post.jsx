import React, { useState } from 'react'
import axios from 'axios'
const Post = () => {
    const [formdata,setformdata]=useState({
        name:"",age:"",city:"",checkin:"",checkout:"",person:""
    })

    const changeinp=(e)=>{
      setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const changesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/hotel",formdata).then(()=>{alert("Booking Sucessfull")})
    }
  return (
    <>
    <form onSubmit={changesubmit}>
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
    </form>
    </>
  )
}

export default Post