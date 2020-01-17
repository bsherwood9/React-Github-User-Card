import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import "./App.css";

import UserCard from "./components/userCard";
import UserPage from "./components/UserPage";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/bsherwood9/followers")
      .then(res => res.json())
      .then(users => this.setState({ users: users }))

      .catch(err => console.log("The following error occurred", err));
  }
  componentDidUpdate(prevState) {
    if (prevState.users !== this.state.users) {
      console.log("current state", this.state.users);
    }
  }

  render() {
    return (
      <div className="App">
        <header>Welcome to your Github... Hub</header>
        <Route
          path="/"
          render={props => {
            this.state.users.map(user => (
              <UserCard {...props} key={user.id} user={user}></UserCard>
            ));
          }}
        />
        <Route
          path="/:id"
          render={props => <UserPage {...props} users={this.users} />}
        />
      </div>
    );
  }
}

export default App;
