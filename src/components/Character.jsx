function Character(props) {
  // how do i destructure name, game, and rating out of props.character.fields?
  // const name = props.character.fields.name;
  // const game = props.character.fields.game;
  // const rating = props.character.fields.rating;
  const { name, game, rating } = props.character.fields;

  return (
    <div className="character">
      <h2>{name}</h2>
      <h3>{game}</h3>
      <h4>{rating}/10</h4>
    </div>
  )
}

export default Character;