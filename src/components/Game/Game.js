import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput";
import Guesses from "../Guesses";
import GameEndBanner from "../GameEndBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export const WON = "WON";
export const LOST = "LOST";
export const PLAYING = "PLAYING";

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  let winState = PLAYING;
  if (guesses.includes(answer)) {
    winState = WON;
  } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
    winState = LOST;
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GameInput
        onGuessed={(guess) => {
          setGuesses([...guesses, guess]);
        }}
        guessAllowed={winState === PLAYING}
      />
      <GameEndBanner
        winState={winState}
        numGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
