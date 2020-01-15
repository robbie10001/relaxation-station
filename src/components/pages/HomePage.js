import React, { Component } from "react";
import {score} from "../../actions"
import {connect} from "react-redux"
import Form from "./../forms/Form";
import Results from "./Results";

class HomePage extends Component {
  state = { score: null}
  componentDidMount(){
    // console.log(this.props.score)
  }
  formOrResults() {
    
    const { score } = this.state;
 
    // // Figure out where & what state is, and from there this logic will run.
    // // Once state has been pulled, multiply it by 2 for use.
    if (score === null) {
      return <Form />;
    }
    return <Results score={this.state.score}/>;
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

const mapStateToProps =(state)=> {
  return {score: state.score}
}

export default connect(mapStateToProps, {score})(HomePage);
