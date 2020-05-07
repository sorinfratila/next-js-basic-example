import React from "react";
import User from "../../components/User";

function authIndexPage(props) {
  return (
    <div>
      <h1>Auth Index page of {props.appName}</h1>
      <User age={42} name="Sorin"></User>
    </div>
  );
}

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super APP (Auth)" });
    }, 1000);
  });

  return promise;
};

export default authIndexPage;
