import { useState } from "react"


function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className="w-full h-screen" style={{backgroundColor : color}}>test</div>
  )
}

export default App
