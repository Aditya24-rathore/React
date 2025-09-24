import { useState } from "react"

const State=()=>{
    let click=()=>{
        alert("Hello")
    }
    let sayhii=(myname)=>{
        alert("Hello"  +  myname)
    }
    const[count,setcount]=useState(0)
    let inc=()=>{
        setcount(count+1)
    }
   let dec=()=>{
        if(count<=0){
            return
        }
        setcount(count-1)
    }
    
    const[mname,setmname]=useState('Aditya')
    let change=()=>{
        setmname(" ")
    }
   
    return(
        <>
       <button onClick={click}>Click Me</button>
       <button onClick={()=>alert("hello world")}>Click Me</button>
       <button onClick={()=>sayhii("aditya")}>Click Me</button>
       <h1 id="display">{count}</h1>
       <button onClick={inc}>Increment</button>
       <button onClick={dec}>Decrement</button>
       <h1>{mname}</h1>
       <button onClick={change}>Change</button>
       

        </>
    )
}
export default State