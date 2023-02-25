import React from "react";
import Keyboard from "../Keyboard";

function GameInput({ onGuessed, guessAllowed, guesses }) {
  const [userInput, setUserInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        onGuessed(userInput);
        setUserInput("");
      }}
    >
      <label>
        Enter guess:
        <br />
        <input
          required
          disabled={!guessAllowed}
          maxLength={5}
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value.toUpperCase())}
          pattern={"[A-Z]{5}"}
          title="Five letter word"
        />
      </label>
      <Keyboard
        guesses={guesses}
        onLetterClicked={(letter) => {
          setUserInput(userInput + letter);
        }}
      />
    </form>
  );
}

export default GameInput;
