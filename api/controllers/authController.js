const prisma = require("../lib/prisma");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcryptjs");

// post signup
async function signUpPost(req, res) {
  console.log("signup route hit - yay!");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      errors: errors.array(),
    });
  }

  const userData = matchedData(req);

  try {
    console.log("creating user:" + userData.username);

    const existingUser = await prisma.user.findUnique({
      where: { username: userData.username },
    });

    if (existingUser) {
      console.log("username already exists. please change username.");
      return res
        .status(400)
        .json({ success: false, message: "Username already taken." });
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await prisma.user.create({
      data: {
        username: userData.username,
        password_hash: hashedPassword,
        is_author: userData.isAuthor || false,
      },
    });

    console.log("User created:" + user.username);
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("ERROR with signUpPost: " + err);
    console.log("DATABASE_URL =", process.env.DATABASE_URL);
    res.status(500).json("Server error");
  }
}
function loginPost(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, user: { id: user.id, username: user.username } });
  })(req, res, next);
}

async function logout(req, res, next) {}

module.exports = {
  signUpPost,
  loginPost,
  logout,
};
