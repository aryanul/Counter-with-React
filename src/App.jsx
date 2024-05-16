import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(1)
  const addValue = () =>{
    setCounter(counter + 1)
  }
  const decValue =() =>{
    if (counter>0) {
      setCounter(counter -1)
    }
    
  }
  // if (counter<0) {
  //   alert("This counter is not allowed go less than zero !")
    
  // }
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Value</button>
      
    </>
  )
}

export default App
