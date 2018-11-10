import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import Developer from "./components/Developer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as="h1" textAlign="center">
          Developer Battle
        </Header>
        <Grid container columns={2}>
          <Grid.Row centered>
            <Grid.Column>
              <Developer />
            </Grid.Column>
            <Grid.Column>
              <Developer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
