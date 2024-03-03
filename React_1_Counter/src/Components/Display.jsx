import React, { useRef } from "react";
import "./Display.css";

const Display = ({ count }) => {

  // this function giving color to the counter
  const getColor = () => {
    if (count > 0) {
      return "green";
    } else if (count == 0) {
      return "black";
    } else {
      return "red";
    }
  };

  return (
    <div className="display">
      <h1 className="counting" style={{ color: getColor() }}>
        {count}
      </h1>
    </div>
  );
};

export default Display;
