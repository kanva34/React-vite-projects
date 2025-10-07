import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState("add");

  const calculate = () => {
    switch (operator) {
      case "add":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "subtract":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "multiply":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "divide":
        setResult(
          Number(secondNumber) !== 0
            ? Number(firstNumber) / Number(secondNumber)
            : "Error: Divide by 0"
        );
        break;
      default:
        setResult(null);
        break;
    }
  };

  return (
    <>
      <h1>Simple Calculator</h1>

      <label>First Number</label>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />

      <label>Second Number</label>
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />

      <label>Operation</label>
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>

      <br />
      <br />
      <button onClick={calculate}>Calculate</button>

      {result !== null && <h2>Result: {result}</h2>}
    </>
  );
}

export default App;
