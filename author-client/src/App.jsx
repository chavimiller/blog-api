import "./App.css";
import Comment from "./components/Comment";
import Home from "./components/Home";
import SignUp from "./components/signUp";
import Login from "./components/Login";
import Post from "./components/Post";

function App() {
  return (
    <>
      <SignUp />
      <Login />
      <Home />
      <Comment />
      <Post />
    </>
  );
}

export default App;
