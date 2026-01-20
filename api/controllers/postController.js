const prisma = require("../lib/prisma");
// const { body, validationResult } = require("express-validator");

async function getAllPosts(req, res) {
  const publishedPosts = prisma.post.findMany({
    where: { authorId: req.user.id, published: true },
  });

  const draftPosts = prisma.post.findMany({
    where: { authorId: req.user.id, published: false },
  });
  res.json({ publishedPosts, draftPosts });
}

// post newPost
async function newPostPost(req, res) {
  /* const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  return res.render("signup", {
  errors: errors.array(),
  data: req.body,
  });
  } 

  const postData = matchedData(req);

  */
  try {
    const isPublished = req.body.action === "publish";
    await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        published: isPublished,
        author: req.user.username,
      },
    });
  } catch (err) {
    console.error("ERROR with newPostPost: " + err);
    res.status(500).json("Server error: " + err);
  }
}

// UPDATE

async function editPostPut(req, res) {
  try {
    const postId = Number(req.params.postId);
    const title = req.body.title?.trim();
    const content = req.body.content;

    await prisma.post.update({
      where: { id: postId },
      data: { title, content },
    });
  } catch (err) {
    console.error("ERROR with editPostPush: " + err);
    res.status(500).json("Server error: " + err);
  }
}

// DELETE

async function deletePost(req, res) {
  try {
    const postId = Number(req.params.postId);

    const post = await prisma.post.findFirst({
      where: {
        id: postId,
        userId: req.user.id,
      },
    });

    if (!post) return res.status(404).json("Post not found.");

    await prisma.post.delete({
      where: { id: postId },
    });
    res.json({ message: "Post deleted", postId });
  } catch (err) {
    console.error("ERROR with deletePost: " + err);
    res.status(500).json("Server error: " + err);
  }
}

module.exports = {
  getAllPosts,
  newPostPost,
  editPostPut,
  deletePost,
};
