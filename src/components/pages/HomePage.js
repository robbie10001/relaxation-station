import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./../forms/Form";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the <i>Relaxation Station</i>!</h1>
        <div>
          <h3>How have you been feeling today?</h3>
          <Form />
        </div>
      </div>
    )
  }
}