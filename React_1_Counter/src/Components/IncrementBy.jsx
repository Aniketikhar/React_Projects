import { React, useState } from "react";

const IncrementBy = ({ get }) => {
  // for storing the input value we have to take state..
  const [steps, setSteps] = useState(1);

  // this function updating input
  function handleInput(e) {
    setSteps(e.target.value);
  }

  // passing input value from child component to parent component
  get(steps);

  return (
    <div style={{ width: "220px" }}>
      <fieldset>
        <legend>Increase Limit</legend>
        <input
          type="number"
          id="steps"
          value={steps}
          style={{ border: "none" }}
          onChange={handleInput}
        />
      </fieldset>
    </div>
  );
};

export default IncrementBy;
