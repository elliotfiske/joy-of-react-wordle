import React from "react";

function GameInput({ onGuessed }) {
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
          maxLength={5}
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value.toUpperCase())}
          pattern={"[A-Z]{5}"}
          title="Five letter word"
        />
      </label>
    </form>
  );
}

export default GameInput;
