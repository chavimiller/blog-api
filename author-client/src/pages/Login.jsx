import { useState } from "react";
import { useNavigate, Link } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUsername("");
        setPassword("");
        setError("");

        navigate("/home");
      } else {
        setError(data.message || "Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Login failed, please try again: " + err);
      setError("Login failed, please try again: " + err);
    }
  }
  return (
    <>
      <h1>Login</h1>
      <form
        action="post"
        className="signup-form"
        autoComplete="off"
        onSubmit={handleSubmit}
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
      <div>
        Signup <Link to={"/auth/signup"}>here</Link>
      </div>
    </>
  );
};

export default Login;
