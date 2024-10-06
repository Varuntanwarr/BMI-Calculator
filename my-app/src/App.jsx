import React, { useState } from "react";
import "./App.css";
// import Wallpaper  from "./Wallpaper";


function App() {
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [bmi, setbmi] = useState("");
  const [Message, setMessage] = useState("");

  //logic
  let calcbmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid height and weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setbmi(bmi.toFixed(1));
      //
      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("your are a healty weight");
      } else {
        setMessage("you are overweight");
      }
    }
  };
  //reload
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label> Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div>
            <label> Height (ibs)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Sumbit
          </button>
          <button className="btn btn-outline" onClick={reload} type="submit">
            Reload
          </button>
          <div></div>{" "}
          <div className="center">
            <h3>Your BMI Is {bmi}</h3>
            <p>{Message}</p>
            <h3 className="varun"> Created By Varun Singh❤️</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
