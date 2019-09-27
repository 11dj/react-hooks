import React, { useState, useEffect } from 'react';
import './App.css';
import { ComponentA, ComponentB } from './components';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Y${count}s`;
  });

  return (
    <div className="App">
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default App;
