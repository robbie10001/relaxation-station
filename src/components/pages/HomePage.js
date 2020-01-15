import React, { Component } from "react";
import Form from "./../forms/Form";
import Results from "./Results";

class HomePage extends Component {
  formOrResults() {
    const { score } = this.state;
    // Figure out where & what state is, and from there this logic will run.
    // Once state has been pulled, multiply it by 2 for use.
    if (score === null) {
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
