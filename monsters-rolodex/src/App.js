import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
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
            // console.log(imgs);
            users.map((user, index) => {
              user.url = imgs[index][0].url;

              return user;
            });
            this.setState({ monsters: users });
          });
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search a cat!"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
