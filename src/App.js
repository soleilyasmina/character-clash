import { Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import './App.css';

function App() {
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
