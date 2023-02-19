import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { answer } from "../Game";

function Guess({ value }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((letterIndex) => {
        const { letter, status } = result?.[letterIndex] ?? {};
        return (
          <span className={`cell ${status ?? ""}`} key={letterIndex}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
