const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <form action="post" className="signup-form" autoComplete="off">
        <label htmlFor="username"></label>
        <input type="text" id="username" />

        <label htmlFor="password"></label>
        <input type="password" id="password" />

        <label htmlFor="confirmPass"></label>
        <input type="password" id="confirmPass" />
      </form>
    </>
  );
};

export default SignUp;
