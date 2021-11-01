import React, { useState } from "react";
import "./index.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container2">
      counter<h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(0)}>Reset it to 0</button>
    </div>
  );
}

export default Counter;
