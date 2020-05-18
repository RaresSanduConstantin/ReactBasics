import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      puppies: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((repsonse) => repsonse.json())
      .then((users) => this.setState({ monsters: users }));
    fetch("https://random.dog/woof.json")
      .then((Response) => Response.json())
      .then((pic) => this.setState({ puppies: pic }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
