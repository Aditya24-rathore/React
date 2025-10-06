
import { createRoot } from 'react-dom/client'
import App from './Propdrilling.jsx'
import { BrowserRouter } from 'react-router-dom'
import mycontext from './mycontext.jsx'

let mydata={
    name:"aditya",
    age:"20",
    city:"Bhopal",
}

createRoot(document.getElementById('root')).render(
    <mycontext.Provider value={mydata}>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </mycontext.Provider>
 
)
