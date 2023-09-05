import React, { useState } from "react";
import Weight from "./components/Weight";
import Bottles from "./components/Bottles";
import Time from "./components/Time";
import Gender from "./components/Gender";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(`undefined`);
  const [bottles, setBottles] = useState(null);
  const [hours, setHours] = useState(null);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * hours;
    let calculatedResult;

    //Make calculations based on gender
    if (gender === "male") {
      calculatedResult = gramsLeft / (weight * 0.7);
    } else {
      calculatedResult = gramsLeft / (weight * 0.6);
    }
    
    //Result cant be a negative
    if (calculatedResult < 0) {
      calculatedResult = 0;
    }

    setResult(calculatedResult);
  }

  return (
    <>
      <h1>Blood Alcohol Concentration</h1>
      <form onSubmit={handleSubmit}>
        <div className="App">
          <Weight weight={weight} setWeight={setWeight} />
          <Bottles bottles={bottles} setBottles={setBottles} />
          <Time hours={hours} setHours={setHours} />
          <Gender gender={gender} setGender={setGender} />
          <output>
            {result !== null
              ? `Blood alcohol level is: ${result.toFixed(2)}‰`
              : null}
          </output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
