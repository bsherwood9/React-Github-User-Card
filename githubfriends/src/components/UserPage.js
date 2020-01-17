import React from "react";
import { Route, Link } from "react-router-dom";

const UserPage = props => {
  console.log(props.match.params.id);
  const user = props.users.find(user => props.match.params.id === `${user.id}`);
  return (
    <div>
      <h1>{user.login}</h1>
    </div>
  );
};
export default UserPage;
