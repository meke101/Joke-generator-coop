import React, { Component } from "react";
import axios from "axios";

export default class Header extends Component {
  state = {
    joke: "",
    isLoading: true
  };

  render() {
    const { joke } = this.state;
    const { isLoading } = this.state;
    if (isLoading) return <p>Loading!!!</p>;

    return (
      <div class="random-joke-container">
        <button class="btn" onClick={this.handleClick}>Submit</button>
        <h2>Here is your random joke:</h2>
        <p>{joke}</p>;                                    
      </div>
    );
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  
  handleClick = event => {
    event.preventDefault();
    this.fetchJoke();
  }

  fetchJoke() {
    axios
      .get("http://api.icndb.com/jokes/random?exclude=[explicit]")
      .then(res => {
        this.setState({ joke: res.data.value.joke, isLoading: false });
      });
  }
}
