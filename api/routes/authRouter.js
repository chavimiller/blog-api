const { Router } = require("express");

const authRouter = Router();
const authController = require("../controllers/authController");
const validateUser = require("../validators/signUpValidator");

authRouter.get("/signup", authController.signUpGet);

authRouter.post("/signup", validateUser, authController.signUpPost);

authRouter.get("/login", authController.loginGet);

authRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/auth/login",
  })
);

authRouter.get("/logout", authController.logout);

module.exports = authRouter;
