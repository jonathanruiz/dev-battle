import React, { Component } from "react";
import Developer from "./components/Developer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Developer Battle</h2>
        <Developer />
        <Developer />
      </div>
    );
  }
}

export default App;
