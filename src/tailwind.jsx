import React from "react"
import "./tailwilwind.css"

let Tailwind=()=>{
    return(
        <>
        <h1>App Calling</h1>
        <div className="bg-red-800 border">I am aditya</div>
        <div className="flex justify-around items-center m-5">
            <p>Aditya</p>
            <p className="border w-20 bg-amber-300">Aditya</p>
            <p>Aditya</p>
        </div>
        </>
    )
}
export default Tailwind