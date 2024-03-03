import { React, useState } from "react";
import "./Buttons.css";

const Buttons = ({ handleIncrease, handleDecrease, step }) => {
  return (
    <div>
      <button onClick={() => handleIncrease()} id="btn-incre">
        Increase + {step}
      </button>
      <button onClick={() => handleDecrease()} id="btn-decre">
        Decrease - {step}
      </button>
    </div>
  );
};

export default Buttons;
