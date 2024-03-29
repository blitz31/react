import { useState } from "react"


function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className="w-full h-screen duration-500"
    style={{backgroundColor: color}}
    >
      <div className="bottom-10 flex flex-wrap justify-center bottom-15 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-4 rounded-2xl ">

          <button
          onClick={() => setColor("red")} 
          className=" outline-none px-4 py-2 rounded-full text-white"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button onClick={() => setColor("blue")}
           className="outline-none px-4 py-2 rounded-full text-white"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={() => setColor("orange")}
           className="outline-none px-4 py-2 rounded-full text-white"
          style={{backgroundColor: "orange"}}
          >Orange</button>

          <button
          onClick={() => setColor("green")}
           className="outline-none px-4 py-2 rounded-full text-white"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("turquoise")}
           className="outline-none px-4 py-2 rounded-full text-white"
          style={{backgroundColor: "turquoise"}}
          >Turquoise</button>

          <button
          onClick={() => setColor("lavender")}
           className="outline-none px-4 py-2 rounded-full text-white"
          style={{backgroundColor: "lavender"}}
          >Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
