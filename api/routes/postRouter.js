const { Router } = require("express");

const postRouter = Router();
const postController = require("../controllers/postController");
const passport = require("../config/passport");

postRouter.use(passport.authenticate("jwt", { session: false }));

postRouter.get("/", postController.getAllPosts);

postRouter.post("/new", postController.newPostPost);

postRouter.put("/:postId/edit", postController.editPostPut);

postRouter.delete("/:postId/delete", postController.deletePost);

module.exports = postRouter;
