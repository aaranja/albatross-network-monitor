import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NormalLayout from "./containers/Layout";
import BaseRouter from "./routes";

import "./css/layout.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NormalLayout {...this.props}>
            <BaseRouter />
          </NormalLayout>
        </Router>
      </div>
    );
  }
}

export default App;
