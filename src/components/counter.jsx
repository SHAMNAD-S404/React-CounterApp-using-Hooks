import React, { useState } from 'react';
import './counter.css'; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
    
  const decrement = () =>  setCount(count > 0 ? count - 1 : 0)
   

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter: {count}</h1>
      <div className="button-container">
        <button onClick={increment} className="counter-button increment-button">
          Increment
        </button>
        <button onClick={decrement} className="counter-button decrement-button">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
