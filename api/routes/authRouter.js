const { Router } = require("express");

const authRouter = Router();
const authController = require("../controllers/authController");

authRouter.get("/signup", authController.signUpGet);

authRouter.get("/login", authController.loginGet);

module.exports = authRouter;
