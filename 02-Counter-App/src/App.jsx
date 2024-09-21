import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Count
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Remove Count
      </button>
    </div>
  );
}

export default App;
