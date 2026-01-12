const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <form action="post" className="signup-form" autoComplete="off">
        <div className="form-field-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>

        <div className="form-field-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <div className="form-field-group">
          <label htmlFor="confirmPass">Confirm password</label>
          <input type="password" id="confirmPass" />
        </div>
        <button className="button-1">Sign up</button>
      </form>
    </>
  );
};

export default SignUp;
