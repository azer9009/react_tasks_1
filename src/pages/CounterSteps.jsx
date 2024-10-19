import React, { useState } from 'react';

const CounterSteps = () => {
  const [count, setCount] = useState(0); 
  const step = 2; 

  
 function increase() {
    setCount(count + step)
 }

  
  function decrease() {
        setCount(count - step)
  }

  return (
    <div>
      <h1>Steps: {count}</h1>
      <button onClick={increase}>Artir +2</button>
      <button onClick={decrease}>Azalt -2 </button>
    </div>
  );
};

export default CounterSteps;
