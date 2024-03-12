import React from "react";
import "./Board.css"

import Squares from "./Squares";

const Board = ({ xisNext, squares, onPlay }) => {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    {
      xisNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player: " + (xisNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
    
        <div className="row board-row" >
          <Squares value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Squares value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Squares value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="row board-row ">
          <Squares value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Squares value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Squares value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="row board-row ">
          <Squares value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Squares value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Squares value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      
    </>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Board;
