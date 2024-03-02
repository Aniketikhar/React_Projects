import {React , useState} from 'react'

const Buttons = ({handleIncrease , handleDecrease , step}) => {
  
  
  
  return (
    <div>
        <button onClick={() => handleIncrease()}>
          Increase + {step}
        </button>
        <button onClick={() => handleDecrease()} >
          Decrease - {step}
        </button>
    </div>
  )
}

export default Buttons
