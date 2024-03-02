import { useState, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import Incre_Limit from "./Components/Incre_Limit";
import IncrementBy from "./Components/IncrementBy";
import DecreLimit from "./Components/DecreLimit";

function App() {
  const [count, setCount] = useState(0);
  const [upper_limit, setUpper_limit] = useState("");
  const [lower_limit, setLower_limit] = useState("");
  const [step, setStep] = useState("");

  const getIncrement = (increment) => {
    setUpper_limit(increment);
  };
  const getDecrement = (decrement) => {
    setLower_limit(decrement);
  };
  const getStep = (steps) => {
    setStep(steps);
  };

  function handleIncrease() {
    if (count >= upper_limit) {
    } else {
      setCount((counte) => counte + parseInt(step) );
      // console.log(typeof(step));
    }
  }
  function handleDecrease() {
    if (count <= lower_limit) {
      
    } else {
      setCount(count - parseInt(step));
      // console.log(upper_limit);
    }
  }

  return (
    <>
      <Navbar />
      <div className="main">
        <Display count={count} />
        <Buttons
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          step={step}
        />

        <div className="row">
          <Incre_Limit get={getIncrement} />
          <IncrementBy get={getStep} />
          <DecreLimit get={getDecrement} />
        </div>
      </div>
    </>
  );
}

export default App;
