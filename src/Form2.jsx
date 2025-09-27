import React, { useState } from 'react'

const Form2 = () => {
    
        // const [name,setname]=useState(" ")
        // const [email,setemail]=useState(" ")
        // const [num,setnum]=useState(" ")
        // const [pass,setpass]=useState(" ")
       
        const[formdata,setformdata]=useState({
            name:"",
            email:"",
            num:"",
            pass:""
        })

    let handlesubmit=(e)=>{
      // preventDefault to stop form reloading or refresh
      e.preventDefault()
      localStorage.setItem("username",formdata.name)
      localStorage.setItem("useremail",formdata.email)
      localStorage.setItem("usernum",formdata.num)
      localStorage.setItem("userpass",formdata.pass)
    }

    const changeinp=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        }
        )
    }

  return (
   <>
   <form onSubmit={handlesubmit}>
      
    Enter name:<input type="text" value={formdata.name} onChange={changeinp} name='name'/> <br /> <br />
    
     Enter email:<input type="text" value={formdata.email} onChange={changeinp}
     name='email'/> <br /> <br />
     
    Enter number:<input type="text" name='num' value={formdata.num} onChange={changeinp}/> <br /> <br />
    
     Enter password:<input type="text" name='pass' value={formdata.pass} onChange={changeinp}/> <br /> <br />
    <button type='submit'>Submit</button>
    </form>
   </>
  )
}

export default Form2