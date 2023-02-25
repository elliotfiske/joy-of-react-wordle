import React from "react";
import Letter from "../Letter";

const LETTERS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function letterStatus(guesses, letter) {
  const letterGuesses = guesses
    .flat()
    .filter((guess) => guess.letter === letter);

  if (letterGuesses.some((guess) => guess.status === "correct")) {
    return "correct";
  }

  if (letterGuesses.some((guess) => guess.status === "misplaced")) {
    return "misplaced";
  }

  if (letterGuesses.some((guess) => guess.status === "incorrect")) {
    return "incorrect";
  }

  return "not-guessed";
}

function Keyboard({ guesses, onLetterClicked }) {
  return (
    <div className="keyboard">
      {LETTERS.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.split("").map((letter, letterIndex) => {
            const status = letterStatus(guesses, letter);

            return (
              <button
                type="button"
                onClick={() => {
                  onLetterClicked(letter);
                }}
                className={`keyboard-button ${status}`}
                key={letterIndex}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
