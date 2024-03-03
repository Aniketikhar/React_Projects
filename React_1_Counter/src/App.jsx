import { useState, React } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";
import Incre_Limit from "./Components/Incre_Limit";
import IncrementBy from "./Components/IncrementBy";
import DecreLimit from "./Components/DecreLimit";

function App() {

  //######### initializing states  ####################

  // store counter value
  const [count, setCount] = useState(0);

  // set upper limit
  const [upper_limit, setUpper_limit] = useState("");

  // set lowest limit
  const [lower_limit, setLower_limit] = useState("");

  // set steps for increasing and decreasing
  const [step, setStep] = useState("");


  // ##################### Functions ####################

  // taking input from set upper limit
  const getIncrement = (increment) => {
    setUpper_limit(increment);
  };

  // taking input from lowest limit
  const getDecrement = (decrement) => {
    setLower_limit(decrement);
  };

  // taking input from steps for increment
  const getStep = (steps) => {
    setStep(steps);
  };


  // ################# handling Buttons ######################
  
  // this function is handling increase button
  function handleIncrease() {
    if (count + parseInt(step) > upper_limit) {
    } else {
      setCount((counte) => counte + parseInt(step));
    }
  }

  // this function is handling decrease button
  function handleDecrease() {
    if (count - parseInt(step) < lower_limit) {
    } else {
      setCount((counte) => counte - parseInt(step));
      console.log(lower_limit);
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
