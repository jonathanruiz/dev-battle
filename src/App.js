import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import Developer from "./components/Developer";
import Authentication from "./data/Authentication";
import "./App.scss";

const api = "https://api.github.com/user";

class App extends Component {
  state = {};

  getRandomID = () => {
    let number;
    number = Math.floor(Math.random() * 10000000) + 1;
    return number;
  };

  // Gets the user ID and image
  getUser = () => {
    let idNumber = this.getRandomID();

    // Use this in the commandline to see how many requests I have left over.
    // curl - H "Authorization: token <YOUR-TOKEN-HERE>" - X GET https://api.github.com/rate_limit

    fetch(`${api}/${idNumber}?${Authentication}`)
      .then(res => {
        // Check if the app got the "OK"
        if (res.status !== 200) {
          throw new Error("There was an error");
        } else {
          return res.json();
        }
      })
      .catch(() => {
        // Restart the function if there was an error
        console.log("Fetch not complete");
      })
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div className="App">
        <Header as="h1" textAlign="center">
          Developer Battle
        </Header>
        <Grid container columns={2}>
          <Grid.Row centered>
            <Grid.Column>
              <Developer getUser={this.getUser} />
            </Grid.Column>
            <Grid.Column>
              <Developer getUser={this.getUser} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
