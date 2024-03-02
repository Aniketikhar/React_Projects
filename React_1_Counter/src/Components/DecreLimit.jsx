import {React , useState} from 'react'

const DecreLimit = ({get}) => {
  const [decrement, setDecrement] = useState(0);

  function handleInput(e){
    setDecrement(e.target.value);
  }
  get(decrement);
 


  return (
    <div style={{width:'220px' }} >
      <fieldset>
        <legend>Decrease Limit</legend>
        <input type="number" id="decre-limit" value={decrement} style={{border:'none'}} onChange={handleInput}  />
        
      </fieldset>
    </div>
  )
}

export default DecreLimit
