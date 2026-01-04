const prisma = require("../prisma");

const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.redirect("/auth/login");
}

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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("signup", {
      errors: errors.array(),
      data: req.body,
    });
  }
  const userData = matchedData(req);
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await prisma.user.create({
      data: {
        username: userData.username,
        password: hashedPassword,
      },
    });
    res.redirect("/auth/login");
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
async function logout(req, res) {
  try {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  } catch (err) {
    console.error("ERROR with logout: " + err);
  }
}

module.exports = { signUpGet, signUpPost, loginGet, loginPost, logout };
