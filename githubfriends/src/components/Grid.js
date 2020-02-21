import React from "react";
import UserCard from "./UserCard";
const Grid = props => {
  return (
    <>
      {props.users.map(user => (
        <UserCard
          {...props}
          key={user.id}
          user={user}
          routeToUser={routeToUser}
        ></UserCard>
      ))}
    </>
  );
};

function routeToUser(props, user) {
  props.history.push(`/${user.id}`);
}
export default Grid;

