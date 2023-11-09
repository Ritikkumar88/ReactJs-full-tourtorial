import {useState} from "react"

function App() {
  const [Color , SetColor] = useState("olive");

  return (
      <div className="w-full h-screen duration-200" style = {{backgroundColor: Color}}>

        {/* div for color pickup */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bh-white px-3 py-2 rounded-3xl">
            <button onClick={() => SetColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => SetColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>green</button>
            <button onClick={() => SetColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Yellow"}}>Yellow</button>
            <button onClick={() => SetColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
            <button onClick={() => SetColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>black</button>
            <button onClick={() => SetColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>orange</button>
            <button onClick={() => SetColor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "brown"}}>brown</button>
            <button onClick={() => SetColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray"}}>gray</button>
          </div>
        </div>
      </div>
  )
}

export default App
