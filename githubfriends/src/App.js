import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import "./App.css";

import Grid from "./components/Grid";
import UserPage from "./components/UserPage";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/bsherwood9")
      .then(res => res.json())
      .then(data => this.setState({ users: [data] }))
      .then(() =>
        fetch(this.state.users[0].followers_url)
          .then(data => data.json())
          .then(data =>
            data.forEach(item =>
              fetch(item.url)
                .then(data => data.json())
                .then(data =>
                  this.setState({ users: [...this.state.users, data] })
                )
            )
          )
      );
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-cont">
            <div className="logo-cont">
              <img className="logo" src="https://logodix.com/logo/64439.png" />
              <h1>Brett's Github</h1>
            </div>
            <div className="link">
              <Link to="/">Home</Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <Route
            exact
            path="/"
            render={props => <Grid {...props} users={this.state.users} />}
          />
          <Route
            exact
            path="/:id"
            render={props => <UserPage {...props} users={this.state.users} />}
          />
        </div>
      </>
    );
  }
}

export default App;
