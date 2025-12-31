const { Router } = require("express");

const authRouter = Router();
const authController = require("../controllers/authController");
const validateUser = require("../validators/signUpValidator");

authRouter.get("/signup", authController.signUpGet);

authRouter.get("/login", validateUser, authController.loginGet);

module.exports = authRouter;
