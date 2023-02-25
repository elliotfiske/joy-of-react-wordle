import React from "react";
import { LOST, PLAYING, WON } from "../Game";

function GameEndBanner({ winState, numGuesses, answer, onNewGame }) {
  const restartButton = (
    <button className="new-game-button" onClick={onNewGame}>
      New Game
    </button>
  );

  if (winState === PLAYING) {
    return null;
  } else if (winState === WON) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {numGuesses} {numGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
        {restartButton}
      </div>
    );
  } else if (winState === LOST) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        {restartButton}
      </div>
    );
  }
}

export default GameEndBanner;
