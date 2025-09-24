import React from "react";
import myImage from "./assets/react.svg"

function Content(){
  // Internal Css
  let okk={
    color:"red",
    backgroundColor:"yellow"
  }
  return(
    <>
    <h4 style={{color:"red",fontSize:"20px"}}>Hello World</h4>
    <p style={okk}>Hello from React</p>
    <img src={myImage} alt="" style={{height:"100px",width:"100px"}} />
    </>
  )
}

export default Content