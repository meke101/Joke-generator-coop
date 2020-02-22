import React, { Component } from "react";
import axios from "axios";

export default class JokeSearchBar extends Component {
  state = {
    firstName: "",
    lastname: "",
    isLoading: true,
    customJoke: ""
    //  err: null,
    //  errMessage: ""
  };
  render() {
    const { customJoke } = this.state;
    return (
      <div className="joke-search">
        <h2>Joke search</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a custom first name</label>
          <input
            id="firstName"
            placeholder={"Enter first name..."}
            value={this.state.firstName}
            onChange={event => {
              this.handleChangeFirstName(event.target.value);
            }}
            required
          />

          <input
            id="lastname"
            placeholder={"Enter last name..."}
            value={this.state.lastname}
            onChange={event => {
              this.handleChangeLastname(event.target.value);
            }}
          />

          <button>Submit</button>
        </form>
        {/* <p> {this.state.errMessage}</p> */}
        <h2>Joke HERE {customJoke} </h2>
      </div>
    );
  }

  handleChangeFirstName = eventValue => {
    this.setState({ firstName: eventValue });
  };

  handleChangeLastname = eventValue => {
    this.setState({ lastname: eventValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchCustomJoke();
    this.setState({ firstName: "", lastname: "" });
  };

  fetchCustomJoke() {
    const { firstName, lastname } = this.state;

    axios
      .get(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastname}&exclude=[explicit]`
      )
      .then(res => {
        this.setState({
          customJoke: res.data.value.joke,
          isLoading: false
        });
      });
  }
}
