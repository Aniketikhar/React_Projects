import { React, useState } from "react";

const DecreLimit = ({ get }) => {
  // for storing the input value we have to take state..
  const [decrement, setDecrement] = useState(0);

  // this function updating input
  function handleInput(e) {
    setDecrement(e.target.value);
  }

  // passing input value from child component to parent component
  get(decrement);

  return (
    <div style={{ width: "220px" }}>
      <fieldset>
        <legend>Decrease Limit</legend>
        <input
          type="number"
          id="decre-limit"
          value={decrement}
          style={{ border: "none" }}
          onChange={handleInput}
        />
      </fieldset>
    </div>
  );
};

export default DecreLimit;
