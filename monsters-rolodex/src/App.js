import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      catei: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((repsonse) => repsonse.json())
      .then((users) => {
        const fetchArray = [];
        users.forEach(() => {
          fetchArray.push(fetch("https://api.thecatapi.com/v1/images/search"));
        });
        Promise.all(fetchArray)
          .then((res) => {
            const jsonArray = [];
            res.forEach((r) => {
              jsonArray.push(r.json());
            });
            return Promise.all(jsonArray);
          })
          .then((imgs) => {
            console.log(imgs);
            users.map((user, index) => {
              user.url = imgs[index][0].url;

              return user;
            });
            this.setState({ catei: users });
          });
      });
  }

  render() {
    return (
      <div className="App">
        <CardList puppiesImg={this.state.puppiesImg} catei={this.state.catei} />
      </div>
    );
  }
}

export default App;
