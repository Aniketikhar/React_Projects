import React, { useState } from "react";
import Squares from "./Components/Squares";

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

const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xisNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    {
      xisNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");
    }

    setSquare(nextSquare);
    setXIsNext(!xisNext);
    console.log(nextSquare);
  }

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "winner" + winner;
  } else {
    status = "next player: " + (xisNext ? "X" : "O");
  }

  return (
    <div className="container">
      <div className="status">{status}</div>
      <div className="board-row">
        <Squares value={square[0]} onSquareClick={() => handleClick(0)} />
        <Squares value={square[1]} onSquareClick={() => handleClick(1)} />
        <Squares value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Squares value={square[3]} onSquareClick={() => handleClick(3)} />
        <Squares value={square[4]} onSquareClick={() => handleClick(4)} />
        <Squares value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Squares value={square[6]} onSquareClick={() => handleClick(6)} />
        <Squares value={square[7]} onSquareClick={() => handleClick(7)} />
        <Squares value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default App;
