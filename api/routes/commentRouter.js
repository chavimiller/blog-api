const { Router } = require("express");

const commentRouter = Router();
const commentController = require("../controllers/commentController");
const passport = require("../config/passport");

commentRouter.use(passport.authenticate("jwt", { session: false }));

commentRouter.post("/new", commentController.newCommentPost);

commentRouter.delete("/delete", commentController.deleteComment);

module.exports = commentRouter;
