// const prisma = require("../prisma");

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

// get login
async function loginGet(req, res) {
  try {
    res.render("login", { errors: [], data: [] });
  } catch (err) {
    console.error("ERROR with loginGet: ", err);
    res.status(500).send("Server error");
  }
}

// post login

// get logout

module.exports = { signUpGet, loginGet };
