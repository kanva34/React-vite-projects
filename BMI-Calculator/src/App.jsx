import { useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [categoryClass, setCategoryClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const h = Number(height);
    const w = Number(weight);

    if (!h || h <= 0 || isNaN(h)) {
      setResult("Please enter a valid height.");
      setCategoryClass("");
      return;
    }

    if (!w || w <= 0 || isNaN(w)) {
      setResult("Please enter a valid weight.");
      setCategoryClass("");
      return;
    }

    const bmi = parseFloat((w / (h / 100) ** 2).toFixed(2));

    let category = "";
    let cssClass = "";

    if (bmi < 18.5) {
      category = "Underweight";
      cssClass = "underweight";
    } else if (bmi < 25) {
      category = "Normal Range";
      cssClass = "normal";
    } else if (bmi < 30) {
      category = "Overweight";
      cssClass = "overweight";
    } else {
      category = "Obese";
      cssClass = "obese";
    }

    setResult(`Your BMI is ${bmi} (${category})`);
    setCategoryClass(cssClass);
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height (cm)</label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {result && <div className={`result ${categoryClass}`}>{result}</div>}
    </div>
  );
};

export default App;
