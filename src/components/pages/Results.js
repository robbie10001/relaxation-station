import React, { Component } from "react";
import GoodScore from "../result_pages/GoodScore";
import MidScore from "../result_pages/MidScore";
import LowScore from "../result_pages/LowScore";

class Results extends Component {
  getResultScore() {
    const { score } = this.state;
    if (score > 40) {
      return (<GoodScore />);
    } else if (score > 20 && score < 40) {
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