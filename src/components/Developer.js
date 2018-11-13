import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";

class Developer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://via.placeholder.com/300",
      name: "Dev"
    };
  }

  handleClick = () => {
    this.props.getUser();
  };

  render() {
    return (
      <div className="developer">
        <Card
          centered
          image={this.state.image}
          header={this.state.name}
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={<Button onClick={this.handleClick}>Refresh</Button>}
        />
      </div>
    );
  }
}

export default Developer;
