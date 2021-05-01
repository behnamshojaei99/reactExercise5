import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(number1 + number2);

  const addTotal = () => {
    setResult(number1 + number2);
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={number1}
          onChange={(ev) => setNumber1(Number(ev.target.value))}
        />
        <input
          type="number"
          placeholder="0"
          value={number2}
          onChange={(ev) => setNumber2(Number(ev.target.value))}
        />
      </div>

      <button onClick={addTotal}>Add Them!</button>

      <h2>{result}</h2>

      <ScotchInfoBar seriesNumber={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
