import React from "react";
import "../App.css";

const UserCard = props => {
  return (
    <div className="card">
      <h1 onClick={() => props.routeToUser(props, props.user)}>
        {props.user.login}
      </h1>
      <img
        src={props.user.avatar_url}
        onClick={() => props.routeToUser(props, props.user)}
      />
      <a href={props.user.html_url}>Profile</a>
    </div>
  );
};

export default UserCard;
