import React from "react";
import { Route, Link } from "react-router-dom";
import "./userpage.css";

const UserPage = props => {
  console.log("userpage props", props.users);
  const selectedUser = props.users.find(
    user => props.match.params.id === `${user.id}`
  );
  console.log("user on Userpage", selectedUser);

  function formatDate(user) {
    const date = new Date(user.created_at);
    return date.toLocaleDateString("en-US");
  }
  return (
    <div className="crapBox">
      {selectedUser ? (
        <div>
          <div className="top-cont">
            <div className="photoBox">
              <h1>{selectedUser.login}</h1>
              <img src={selectedUser.avatar_url} />
            </div>
            <div className="info">
              <h3>{selectedUser.name}</h3>
              {selectedUser.blog && (
                <h3>
                  Website:{" "}
                  <a href={`https://${selectedUser.blog}`}>
                    {selectedUser.blog}
                  </a>
                </h3>
              )}
              <h3>Followers:{selectedUser.followers}</h3>
              <h3>Following:{selectedUser.following}</h3>
              <h3>User since: {formatDate(selectedUser)}</h3>
            </div>
          </div>
          <h2>Commit History</h2>
          <img
            src={`http://ghchart.rshah.org/${selectedUser.login}`}
            className="gitGrid"
          />
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};
export default UserPage;
