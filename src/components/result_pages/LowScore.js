import React, { Component } from "react";

class LowScore extends Component {
  render() {
    return (
      <div>
        <hr />
        <h3>Your mood is very low. It may be time to see a health care professional.</h3>
    
        <ul>
          <li>Seek the advice of a mental health professional.</li>
          <li>Seek guidance from your general practitioner if you don't know where to turn.</li>
          <li>Get a mental health plan from your general practitioner. This will allow you to claim visits to a a psychologist or psychiatrist through medicare.</li>
        </ul>
      
        <h4>Here are some helpful links:</h4>
      
        <ul>
          <li><a href="https://www.beyondblue.org.au" target="_blank">Beyond Blue</a></li>
          <li><a href="https://www.lifeline.org.au" target="_blank">LifeLine</a></li>
          <li><a href="https://www.blackdoginstitute.org.au" target="_blank">Black Dog Institute</a></li>
        </ul>
      </div>
    )
  }
}

export default LowScore;