
import { createRoot } from 'react-dom/client'
import App from './Crud.jsx'
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
        "background-color":"red",
        "color":"white",
        "height":"200px",
        "width":"500px",
        "text-align":"center",
        "font-size":"50px"
    },
    light:{
        "background-color":"white",
        "color":"black",
        "height":"200px",
        "width":"500px",
        "text-align":"center",
        "font-size":"50px"
    }
}

let num={
    "num1":20,
    "num2":30
}

createRoot(document.getElementById('root')).render(
    <mycontext.Provider value={theme}>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </mycontext.Provider>
 
)
