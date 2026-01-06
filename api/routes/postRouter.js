const { Router } = require("express");

const postRouter = Router();
const postController = require("../controllers/postController");
const passport = require("../config/passport");

postRouter.use(passport.authenticate("jwt", { session: false }));

postRouter.get("/new", postController.newPostGet);

postRouter.post("/new", postController.newPostPost);

postRouter.get("/:postId", postController.readPostGet);

postRouter.get("/:postId/edit", postController.editPostGet);

postRouter.put("/:postId/edit", postController.editPostPut);

postRouter.delete("/:postId/delete", postController.deletePost);

module.exports = postRouter;
