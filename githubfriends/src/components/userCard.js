import React from "react";

const UserCard = props => (
  <div onClick={props.history.push(`/${props.user.id}`)}>
    <h1>{props.user.login}</h1>
    <img src={props.user.avatar_url} />
    <h3>{props.user.followers}</h3>
    <a href={props.user.html_url}>Profile</a>
  </div>
);

export default UserCard;
