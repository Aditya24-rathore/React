import React from "react";

let Child=(Props)=>{
    return(
        <>
        <h1>Child</h1>
        <h4>Hello my name is {Props.myname}</h4>
        <h4>and my age is {Props.age}</h4>
        </>
    )
}
export default Child