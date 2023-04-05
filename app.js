import React, { useState } from 'react';
function App(){
  const [count, setCount]= useState(0);
  let Increment = () =>{
    setCount(count+1);
  }
  let Decrement = () =>{
    setCount(count-1);
  }
  const Clear = () => {
    window.location.reload(false);
  }
  return(
    <>
      <h1>Value: {count}</h1>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Increment}>Increment</button>
      <button onClick={Clear}>Clear</button>
    </>
  )
}

export default App;