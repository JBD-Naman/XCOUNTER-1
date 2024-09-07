import React, { useState } from 'react';
import './App.css';

function App() {
  // State variable to keep track of the count
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      {/* Display the count */}
      <p>Count: {count}</p>
      {/* Increment button */}
      <button onClick={increment}>Increment</button>
      {/* Decrement button */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
