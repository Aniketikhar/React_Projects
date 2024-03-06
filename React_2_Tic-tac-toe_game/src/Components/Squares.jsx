import React, { useState } from 'react'

const Squares = ({value , onSquareClick}) => {

    

  return (
    <>
      <button onClick={onSquareClick}>{value}</button>
    </>
  )
}

export default Squares
