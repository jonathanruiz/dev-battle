import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";

class Developer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dev",
      extra: <Button>Click here</Button>
    };
  }
  render() {
    return (
      <div className="developer">
        <Card
          centered
          image="https://via.placeholder.com/300"
          header="Dev"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={this.state.extra}
        />
      </div>
    );
  }
}

export default Developer;
