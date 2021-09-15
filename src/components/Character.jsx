import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Character(props) {
  // how do i destructure name, game, and rating out of props.character.fields?
  // const name = props.character.fields.name;
  // const game = props.character.fields.game;
  // const rating = props.character.fields.rating;
  const { name, game, rating } = props.character.fields;

  // some async function to handle click
  const removeCharacter = async () => {
    // make a specific url by combining the baseURL with the character's id
    const characterURL = `${baseURL}/${props.character.id}`;
    // make a DELETE request to that endpoint, with the config
    await axios.delete(characterURL, config);
    // trigger our useEffect
    props.setToggleFetch((curr) => !curr);
  }

  return (
    <div className="character">
      <h2>{name}</h2>
      <h3>{game}</h3>
      <h4>{rating}/10</h4>
      <button onClick={removeCharacter}>REMOVE CHARACTER</button>
      <Link to={`/edit/${props.character.id}`}>
        <button>EDIT CHARACTER</button>
      </Link>
    </div>
  )
}

export default Character;