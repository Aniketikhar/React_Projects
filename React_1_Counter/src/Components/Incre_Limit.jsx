import {React , useRef, useState} from 'react'

const Incre_Limit = ({get}) => {
  
  const [increment, setIncrement] = useState(10);

  function handleInput(e){
    setIncrement(e.target.value);
  }
  get(increment);
 


  return (
    <div style={{width:'220px' }} >
      <fieldset>
        <legend>Increase Limit</legend>
        <input type="number" id="incre-limit" value={increment} style={{border:'none'}} onChange={handleInput}  />
        
      </fieldset>
    </div>
  )
}

export default Incre_Limit
