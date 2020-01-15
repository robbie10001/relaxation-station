import React, { Component } from "react";

class GoodScore extends Component {
  render() {
    return (
      <div>
        <h3>Well done, your mood is great at the moment!</h3>
        <h4>In order to maintain this mood, we suggest the following:</h4>
    
        <ul>
          <li>Take a bath to relax.</li>
          <li>Make sure to stay hydrated and maintain a healthy diet.</li>
          <li>Remember to have 'me' time, and not to overload yourself!</li>
          <li>Consider taking up a class of Yoga or Tai Chi</li>
        </ul>
      
        <h4>Here are some helpful links:</h4>
      
        <ul>
          <li><a href="https://www.healthdirect.gov.au/diet-and-mental-health">Health Direct</a></li>
          <li><a href="https://www.yogaaustralia.org.au">Yoga Australia</a></li>
          <li><a href="www.taichiaustralia.com.au">Tai-Chi Australia</a></li>
          <li><a href="https://www.smilingmind.com.au/">Smiling Mind</a></li>
        </ul>
      </div>
    )
  }
}

export default GoodScore;