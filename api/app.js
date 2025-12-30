const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Homepage"));

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
