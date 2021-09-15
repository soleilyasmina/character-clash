import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [rating, setRating] = useState(1);

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        required
        autoComplete="off"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="game">Game:</label>
      <input
        id="game"
        type="text"
        required
        value={game}
        onChange={(e) => setGame(e.target.value)}
      />
      <label htmlFor="rating">Rating: {rating}/10</label>
      <input
        type="range"
        id="rating"
        required
        step={1}
        min={1}
        max={10}
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
      />
      <button type="submit">Let Me Judge Them!</button>
    </form>
  );
}

export default Form;
