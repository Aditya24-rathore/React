
import { createRoot } from 'react-dom/client'
import App from './Propdrilling.jsx'
import { BrowserRouter } from 'react-router-dom'
import mycontext from './mycontext.jsx'
let mydata={
    name:"aditya",
    age:"20",
    city:"Bhopal",
}

let hobby=["reading","writing","singing"]

let theme={
    dark:{
        "background-color":"black",
        "color":"white"
    },
    light:{
        "background-color":"white",
        "color":"black"
    }
}

let num={
    "num1":20,
    "num2":30
}

createRoot(document.getElementById('root')).render(
    <mycontext.Provider value={{theme}}>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </mycontext.Provider>
 
)
