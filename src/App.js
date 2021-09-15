import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Character from "./components/Character";
import Form from "./components/Form";
import Nav from "./components/Nav";
import { baseURL, config } from "./services";
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      // make an axios get call to our url, with our config object and save the response
      const response = await axios.get(baseURL, config);
      // console log the response's data
      setCharacters(response.data.records);
    }
    getCharacters();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <main>
          {/* map through the characters array and render a p tag for each one with the character's name field as its text content */}
          {characters.map((character) => (
            <Character key={character.id} character={character} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
        <Form characters={characters}  setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form characters={characters} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
