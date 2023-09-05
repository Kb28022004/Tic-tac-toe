import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [IsXturn, setIsxturn] = useState(true);

  const checkWinner = () => {
    const Winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of Winnerlogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copystate = [...state];
    copystate[index] = IsXturn ? "X" : "0";
    setstate(copystate);
    setIsxturn(!IsXturn);
  };

  const handlePlayagain = () => {
    setstate(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <span className="winner">
            Hurrrahh!!{" "}
            <span className="winner2">
              {" "}
              <span style={{ color: "blue" }}> {isWinner} </span> &nbsp; won the
              game{" "}
            </span>
          </span>{" "}
          <button onClick={handlePlayagain} className="btn btn-primary">
            Play Again
          </button>
        </>
      ) : (
        <>
          <h1 style={{ color: "red", textAlign: "center", fontSize: "35px" }}>
            <marquee>Tic Tac Toe </marquee>
          </h1>
          <h4 style={{ color: "black", textAlign: "center", fontSize: "25px" }}>
            Please {IsXturn ? "X" : "0"} move
          </h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
