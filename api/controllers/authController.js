const prisma = require("../lib/prisma");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// post signup
async function signUpPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      success: false,
      errors: errors.array(),
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
    res.status(201).json({ success: true });
  } catch (err) {
    console.error("ERROR with signUpPost: " + err);
    res.status(500).send("Server error");
  }
}
async function loginPost(req, res) {
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
