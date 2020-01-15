import React, { Component } from "react";
import Form from "./../forms/Form";
import Results from "./Results";

class HomePage extends Component {
  formOrResults() {
    // Figure out where & what state is, and from there this logic will run.
    if (state === null) {
      return <Form />;
    }
    return <Results />;
  }

  render() {
    return (
      <div>
        <h1>
          Welcome to the <i>Relaxation Station</i>!
        </h1>
        <div>
          <h3>How have you been feeling today?</h3>
        </div>
        {this.formOrResults()}
      </div>
    );
  }
}

export default HomePage;
