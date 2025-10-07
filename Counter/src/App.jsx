import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
  const addValue =()=>{
    if (counter < 20)  {
           
      setCounter(counter + 1)
    }
  }
  const decreseValue=()=>{
    if (counter > 0) {
      
      setCounter(counter - 1)
    }
  }
    
  return (
      <>
      <h1>Welcome To MY Page</h1>
      <h2>counter values: {counter}</h2>
      <br/>
      <button onClick={addValue}>Add value</button>
      <button onClick={decreseValue}>decrese value</button>
    </>
  )
}

export default App
