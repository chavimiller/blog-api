const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>Login</h1>
      <form
        action="post"
        className="signup-form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-field-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-field-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="button-1" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
