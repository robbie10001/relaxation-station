import React, { Component } from "react";

class MidScore extends Component {
  render() {
    return (
      <div>
        <h3>Your mood is not too bad, but it would be awesome if you could improve it just a bit!</h3>
        <h4>Can we suggest you take the following steps?</h4>
    
        <ul>
          <li>Learn about mindfulness techniques.</li>
          <li>Learn how to control your breathing.</li>
          <li>Learn a bit about Cognitive Behavioral Therapy (CBT)</li>
        </ul>
      
        <h4>Here are some helpful links:</h4>
      
        <ul>
          <li><a target="_blank" href="https://www.everydayhealth.com">Everyday Health</a></li>
          <li><a target="_blank" href="https://www.cci.health.wa.gov.au">Centre for Clinical Intervention</a></li>
          <li><a target="_blank" href="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/cognitive-behaviour-therapy">Cognitive Behavioral Therapy</a></li>
          <li><a target="_blank" href="https://www.smilingmind.com.au/">Smiling Mind</a></li>
        </ul>
      </div>
    )
  }
}

export default MidScore;