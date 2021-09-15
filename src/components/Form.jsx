import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function Form(props) {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [rating, setRating] = useState(1);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    // if there's an id param
    if (params.id) {
      // find the character where their id matches the params' id property
      const character = props.characters.find((character) => character.id === params.id);
      // if that character exists (i.e. is not undefined)
      if (character) {
        // set each of our states to their fields (name to the character's name, etc.)
        setName(character.fields.name);
        setGame(character.fields.game);
        setRating(character.fields.rating);
      }
    }
  }, [params.id, props.characters]);
  // we'll figure out the dependencies as we go

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create a new object called newCharacter (holding all our data from state)
    const newCharacter = {
      name,
      game,
      rating,
    }
    // make a POST request to our endpoint (same as GET), pass our newCharacter as the data, and pass our config to allow ourselves entry into the database
    if (params.id) {
      const characterURL = `${baseURL}/${params.id}`;
      await axios.put(characterURL, { fields: newCharacter }, config);
    } else {
      await axios.post(baseURL, { fields: newCharacter }, config);
    }
    // trigger our useEffect
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
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
