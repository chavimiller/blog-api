const express = require("express");
const app = express();
const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");

app.get("/", (req, res) => res.send("Homepage"));

app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
