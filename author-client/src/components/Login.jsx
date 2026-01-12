import React from "react";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form action="post" className="signup-form" autoComplete="off">
        <div className="form-field-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>

        <div className="form-field-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <button className="button-1">Login</button>
      </form>
    </>
  );
};

export default Login;
