import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import { Button } from "./components/button/Button";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(""); 
  const updateCounter = (increase: boolean) => {
    setCount((currentValue) => {
      if (count === 1 && !increase){//(count > 0 && increase){
        setError("cannot go below zero. nice try tho.");
      } 
      else{ 
        setError("");
      }
      return currentValue;
      //return increase ? currentValue + 1 : currentValue - 1;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="container d-flex justify-content-center">
        <div className="card bg-white shadow text-center p-4 m-4">
          <h1>Counter: {count}</h1>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Button color="primary" onClick={() => updateCounter(true)}>
              Increase +
            </Button>
            <Button color="secondary" disabled={count === 0} onClick={() => updateCounter(false)}>
              Decrease -
            </Button>
            <Button color="danger" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
