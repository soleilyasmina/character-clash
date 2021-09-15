import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [rating, setRating] = useState(1);

  const createCharacter = async (e) => {
    e.preventDefault();
    // create a new object called newCharacter (holding all our data from state)
    const newCharacter = {
      name,
      game,
      rating,
    }
    // make a POST request to our endpoint (same as GET), pass our newCharacter as the data, and pass our config to allow ourselves entry into the database
    await axios.post(baseURL, { fields: newCharacter }, config);
    // trigger our useEffect
    props.setToggleFetch((curr) => !curr);
  }

  return (
    <form onSubmit={createCharacter}>
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
