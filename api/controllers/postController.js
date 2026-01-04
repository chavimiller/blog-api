const prisma = require("../lib/prisma");
const { body, validationResult } = require("express-validator");

async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.redirect("/auth/login");
}

// CREATE
// get newPost
async function newPostGet(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with newPostGet: " + err);
    res.status(500).send("Server error");
  }
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
    res.status(500).send("Server error: " + err);
  }
}

// READ
async function readPostGet(req, res) {
  const postId = Number(req.params.postId);
  const post = await prisma.post.findFirst({
    where: {
      id: postId,
      userId: req.user.id,
    },
    include: {
      comments: true,
    },
  });
  if (!post) return res.status(404).send("Post not found.");

  res.render("posts", {
    errors: [],
    post,
    comments: post.comments,
  });
}

// UPDATE
// get editPost
async function editPostGet(req, res) {
  try {
    const postId = Number(req.params.postId);
    const post = await prisma.post.findFirst({
      where: {
        id: postId,
        userId: req.user.id,
      },
    });
    if (!post) return res.status(404).send("Post not found.");

    const posts = await prisma.post.findMany({
      where: { authorId: req.user.id },
      orderBy: { id: "asc" },
    });

    res.render("/homepage", { errors: [], posts });
  } catch (err) {
    console.error("ERROR with editPostGet: " + err);
    res.status(500).send("Server error: " + err);
  }
}

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
    res.status(500).send("Server error: " + err);
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

    if (!post) return res.status(404).send("Post not found.");

    await prisma.post.delete({
      where: { id: postId },
    });
    res.redirect("/home");
  } catch (err) {
    console.error("ERROR with deletePost: " + err);
    res.status(500).send("Server error: " + err);
    å;
  }
}

module.exports = {
  ensureAuthenticated,
  newPostGet,
  newPostPost,
  readPostGet,
  editPostGet,
  editPostPut,
  deletePost,
};
