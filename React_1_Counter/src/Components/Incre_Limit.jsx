import { React, useRef, useState } from "react";

const Incre_Limit = ({ get }) => {
  // for storing the input value we have to take state..
  const [increment, setIncrement] = useState(100);

  // this function updating input
  function handleInput(e) {
    setIncrement(e.target.value);
  }

  // passing input value from child component to parent component
  get(increment);

  return (
    <div style={{ width: "220px" }}>
      <fieldset>
        <legend>Increase Limit</legend>
        <input
          type="number"
          id="incre-limit"
          value={increment}
          style={{ border: "none" }}
          onChange={handleInput}
        />
      </fieldset>
    </div>
  );
};

export default Incre_Limit;
