import React, { Component } from "react";
import Form from "./../forms/Form";
import Results from "./Results";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to the <i>Relaxation Station</i>!
        </h1>
        <div>
          <h3>How have you been feeling today?</h3>
        </div>
      </div>
    );
  }
}

export default HomePage;