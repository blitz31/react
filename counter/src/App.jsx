import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  const addVal = () => {
    if(counter == 20)
    {
      setCounter(20)
    }
    else
    {counter = counter + 1;
    setCounter(counter)}
  }
  const decVal = () => {
    if(counter == 0)
    {
      setCounter(0)
    }
    else
    {counter = counter - 1;
    setCounter(counter)}
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addVal}>Inc</button>
      <br /><br />
      <button onClick={decVal}>Dec</button>
    </>
  )
}

export default App
