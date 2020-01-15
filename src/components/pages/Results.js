import React, { Component } from "react";

class Results extends Component {
  getResultScore() {
    if (score > 80) {
      return ("<h1>You're feeling good!</h1>");
    } else if (score > 40 && score < 80) {
    } else {
    }
  }

  render() {
    const score = 85;
    return this.getResultScore(score);
  }
}
export default Results;