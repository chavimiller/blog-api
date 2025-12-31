const prisma = require("../prisma");

// get signup
async function signUpGet(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with signUpGet: " + err);
    res.status(500).send("Server error");
  }
}

// post signup

// get login

// post login

// get logout

module.exports = { signUpGet };
