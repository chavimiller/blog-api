// const prisma = require("../prisma");
const { body, validationResult } = require("express-validator");

// get signup
async function signUpGet(req, res) {
  try {
    res.render("signup", { errors: [], data: [] });
  } catch (err) {
    console.error("ERROR with signUpGet: " + err);
    res.status(500).send("Server error");
  }
}

// post signup
async function signUpPost(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with signUpPost: " + err);
    res.status(500).send("Server error");
  }
}

// get login
async function loginGet(req, res) {
  try {
    res.render("login");
  } catch (err) {
    console.error("ERROR with loginGet: ", err);
    res.status(500).send("Server error");
  }
}

// post login
async function loginPost(req, res) {
  try {
    "/login",
      passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/",
      });
  } catch (err) {
    console.error("ERROR with loginPost: ", err);
    res.status(500).send("Server error");
  }
}

// get logout

module.exports = { signUpGet, signUpPost, loginGet, loginPost };
