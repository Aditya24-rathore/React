import React from "react";
import Child from "./child";

let Prop=()=>{
    let details={
        name:"aditya",
        age:20,
        city:"Sehore"
    }
    return(
        <>
        <h1>Props</h1>
        <Child myname={details.name} age={details.age}></Child>
        </>
    )
}
export default Prop