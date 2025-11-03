import React from "react";

function Greeting() {
  const isLoggedIn = true;
  return (
    // <div>{isLoggedIn ? <h1>Welcome Back.</h1> : <h1>Please Log in</h1>}</div>
    <div>{isLoggedIn && <h1>Welcome Back.</h1>}</div>
  );
}

export default Greeting;
