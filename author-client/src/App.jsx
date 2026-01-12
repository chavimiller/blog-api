import "./App.css";
import Comment from "./components/Comment";
import Home from "./components/Home";
import SignUp from "./components/signUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      <SignUp />
      <Home />
      <Login />
      <Comment />
    </>
  );
}

export default App;
