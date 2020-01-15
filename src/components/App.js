import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/relaxation_station" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;