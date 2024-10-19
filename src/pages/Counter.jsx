import React, {useState} from 'react'
import '../App.css'
const Counter = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
    
  }

  const min = 0
  const max = 21

  return (
    <div>
      <p > {count} </p>
      <button onClick={increment} disabled={max === count} >+</button>
      <button onClick={decrement} disabled={min === count } >-</button>
      <button onClick={()=>{
        setCount(0)
      }}>Reset</button>
    </div>
  )
}

export default Counter
