import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameInput from "../GameInput";
import Guesses from "../Guesses";
import GameEndBanner from "../GameEndBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

export const WON = "WON";
export const LOST = "LOST";
export const PLAYING = "PLAYING";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  let winState = PLAYING;
  const guessWords = guesses.map((arr) => arr.map((g) => g.letter).join(""));

  if (guessWords.includes(answer)) {
    winState = WON;
  } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
    winState = LOST;
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GameInput
        onGuessed={(guess) => {
          const guessResult = checkGuess(guess, answer);
          setGuesses([...guesses, guessResult]);
        }}
        guessAllowed={winState === PLAYING}
        guesses={guesses}
      />
      <GameEndBanner
        winState={winState}
        numGuesses={guesses.length}
        answer={answer}
        onNewGame={() => {
          setGuesses([]);
          setAnswer(sample(WORDS));
        }}
      />
    </>
  );
}

export default Game;
