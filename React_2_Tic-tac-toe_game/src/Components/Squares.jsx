import React from 'react';
import './Square.css';

const Squares = ({value , onSquareClick}) => {

  return (
    <div className='col p-0'>
      <button className='w-100 h-100' onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default Squares
