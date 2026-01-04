const { Router } = require("express");

const postRouter = Router();
const postController = require("../controllers/postController");

postRouter.get("/new", postController.newPostGet);

postRouter.post(
  "/new",
  postController.ensureAuthenticated,
  postController.newPostPost
);

postRouter.get("/:postId", postController.readPostGet);

postRouter.get("/:postId", postController.editPostGet);

postRouter.put("/:postId", postController.editPostPut);

postRouter.delete("/:postId", postController.deletePost);

module.exports = postRouter;
