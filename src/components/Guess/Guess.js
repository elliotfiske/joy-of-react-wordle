import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((letterIndex) => {
        const { letter, status } = value?.[letterIndex] ?? {};
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
