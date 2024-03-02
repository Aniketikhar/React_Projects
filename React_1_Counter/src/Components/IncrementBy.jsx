import {React , useState } from 'react'

const IncrementBy = ({get}) => {
  const [steps, setSteps] = useState(1);

  function handleInput(e){
    setSteps(e.target.value);
  }
  get(steps);
 
  return (
    <div style={{width:'220px' }} >
      <fieldset>
        <legend>Increase Limit</legend>
        <input type="number" id="steps" value={steps} style={{border:'none'}} onChange={handleInput}  />
      </fieldset>
    </div>
  )
}

export default IncrementBy
