import "./App.css";
import { useState } from "react";
import "./index.css"

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  };

  const addTwo = () => {
    setCount(count + 2)
  };

  const minusTwo = () => {
    setCount(count - 2)
  };

  return <div className="App">
      <div className="count">
        {count}
      </div>
    
    <button className="btn" onClick={minusTwo}> - 2</button>
    <button className="btn" onClick={decrease}>Decrease</button>
    <button className="btn" onClick={setToZero}>Set to Zero</button>
    <button className="btn" onClick={increase}>Increase</button>
    <button className="btn" onClick={addTwo}> + 2</button>

      
  </div>
}

export default App;
