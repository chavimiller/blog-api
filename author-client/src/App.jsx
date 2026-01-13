import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<SignUp />} />

      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="home" element={<Home />} />

      <Route path="post">
        <Route path="new" />
        <Route path=":postId" />
        <Route path=":postId/edit" />
        <Route path=":postId/delete" />
        <Route path=":postId/comments/:commentId/delete" />
      </Route>
    </Routes>
  );
}

export default App;
