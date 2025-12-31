const { Router } = require("express");

const authRouter = Router();
const authController = require("../controllers/authController");
const validateUser = require("../validators/signUpValidator");

authRouter.get("/signup", authController.signUpGet);

authRouter.post("/signup", validateUser, authController.signUpPost);

authRouter.get("/login", authController.loginGet);

authRouter.post("/login", authController.loginPost);

module.exports = authRouter;
