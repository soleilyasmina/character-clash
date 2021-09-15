function Form(props) {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" />
      <label htmlFor="game">Game:</label>
      <input id="game" type="text" />
      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" />
      <button type="submit">Let Me Judge Them!</button>
    </form>
  );
}

export default Form;
