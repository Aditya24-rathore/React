import "./nav.css"

 import img2  from "./assets/react.svg"
function App() {
  return(
   <>

  {/* Navigation */}
  <div className="flex justify-evenly items-center">
    <img src={img2} alt="" />
    <ul className="flex gap-6  font-medium">
      <li className="cursor-pointer hover:text-blue-600">Home</li>
      <li className="cursor-pointer hover:text-blue-600">Service</li>
      <li className="cursor-pointer hover:text-blue-600">Contact</li>
    </ul>

 
  <button className="px-4 py-2 bg-blue-600 text-white rounded-4xl hover:bg-blue-700 ">
    Book
  </button>
  </div>

  <main>
    <section className="h-screen w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQHKiCFxx97J5GGBvPeK3yfj-paqvkCnLbjKsSoXDYXmgXwnbsx_9Kc0&s')] bg-no-repeat bg-cover"></section>
  </main>

    </>
  )
}

export default App