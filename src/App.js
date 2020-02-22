import React from "react";
import "./App.css";
import Header from "./components/Header";
import RandomJokeContainer from "./components/RandomJokeContainer";
import { Router } from "@reach/router";
import JokeSearchBar from "./components/JokeSearchBar";

function App() {
  return (
    <div className="App">
      <Header />

        <Router>

      <RandomJokeContainer path="/home"/>
      <JokeSearchBar path="/custom-joke"/>
        </Router>
    </div>
  );
}

export default App;
