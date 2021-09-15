import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
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
        <h3>This is the home!</h3>
      </Route>
      <Route path="/new">
        <h3>Our create form goes here!</h3>
      </Route>
      <Route path="/edit/:id">
        <h3>Our edit form goes here!</h3>
      </Route>
    </div>
  );
}

export default App;
