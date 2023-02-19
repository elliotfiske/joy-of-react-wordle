import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <Guesses guesses={guesses} />
      <GameInput
        onGuessed={(guess) => {
          setGuesses([...guesses, guess]);
        }}
      />
    </>
  );
}

export default Game;
