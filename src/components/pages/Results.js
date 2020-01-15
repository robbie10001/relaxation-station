import React, { Component } from "react";
import GoodScore from "../result_pages/GoodScore";
import MidScore from "../result_pages/MidScore";
import LowScore from "../result_pages/LowScore";

class Results extends Component {
  getResultScore() {
    const score = 85;
    // Grab score from the form/state
    if (score > 80) {
      return (<GoodScore />);
    } else if (score > 40 && score < 80) {
      return (<MidScore />);
    } else {
      return (<LowScore />);
    }
  }

  render() {
    return this.getResultScore();
  }
}
export default Results;