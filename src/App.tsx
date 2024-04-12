import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const asincPlusCount = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const asincMinusCount = () => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <p>{count}</p>
      <div className="card">
        <button onClick={plusCount}>+</button>
        <button onClick={minusCount}>-</button>
        <button onClick={asincPlusCount}>Asinc +</button>
        <button onClick={asincMinusCount}>Asinc -</button>
      </div>
    </>
  );
};
export default App;
