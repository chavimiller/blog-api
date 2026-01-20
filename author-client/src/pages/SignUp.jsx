import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, isAuthor, password, confirmPass }),
      });

      const data = await response.json();

      if (response.ok) {
        setUsername("");
        setIsAuthor(false);
        setPassword("");
        setConfirmPass("");
        setError("");

        navigate("/auth/login");
      } else {
        setError(data.message || "Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Signup failed, please try again" + err);
      setError("Signup failed, please try again." + err);
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      {error && <div className="error-message">{error}</div>}
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
          <label htmlFor="isAuthor">Sign up as a blog author</label>
          <input
            type="checkbox"
            id="isAuthor"
            checked={isAuthor}
            onChange={(e) => setIsAuthor(e.target.checked)}
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

        <div className="form-field-group">
          <label htmlFor="confirmPass">Confirm password</label>
          <input
            type="password"
            id="confirmPass"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>
        <button className="button-1" type="submit">
          Sign up
        </button>
      </form>
      <div>
        Login <Link to={"/auth/login"}>here</Link>
      </div>
    </>
  );
};

export default SignUp;
