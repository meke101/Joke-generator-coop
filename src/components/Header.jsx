import React from "react";
import { Link } from "@reach/router";

export default function Header(props) {
  return (
    <div class="header">
      <Link to={`/home/`}>
        <button>Home</button>
      </Link>
      <h2>Joke App</h2>
    </div>
  );
}
