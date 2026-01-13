const { Router } = require("express");

const postRouter = Router();
const postController = require("../controllers/postController");
const passport = require("../config/passport");

postRouter.use(passport.authenticate("jwt", { session: false }));

postRouter.post("/new", postController.newPostPost);

postRouter.put("/:postId/edit", postController.editPostPut);

postRouter.delete("/:postId/delete", postController.deletePost);

module.exports = postRouter;
