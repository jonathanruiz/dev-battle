import React, { Component } from "react";

class Developer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dev"
    };
  }
  render() {
    return (
      <div className="developer">
        <h2>{this.state.name}</h2>
        <img src="https://via.placeholder.com/150" alt="place holder" />
      </div>
    );
  }
}

export default Developer;
