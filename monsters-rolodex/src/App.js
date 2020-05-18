import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      catei: [],
      puppiesImg: [],
    };
  }

  componentDidMount() {
    /*Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://random.dog/woof.json"),
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({ catei: res1 });
        this.setState({ puppiesImg: res2 });
      });*/

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((repsonse) => repsonse.json())
      .then((users) => {
        // this.setState({ catei: users });
        // fetch("https://random.dog/woof.json")
        //   .then((Response) => Response.json())
        //   .then((pic) => {
        //     this.setState({ puppiesImg: pic });
        //     users.map((user) => {
        //       user.url = pic.url;
        //       return user;
        //     });
        //     this.setState({ catei: users });
        //   });
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
