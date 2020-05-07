import React from "react";

function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <style jsx>{`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

User.propTypes = {};

export default User;
