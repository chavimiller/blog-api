const prisma = require("../lib/prisma");
const { body, validationResult } = require("express-validator");

// get newComment

/*
async function newCommentGet(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).json("Server error");
  }
}
  */

async function newCommentPost(req, res) {
  try {
    await prisma.comment.create({
      data: {
        content: req.body.content,
        postId: Number(req.params.postId),
        authorId: req.user.id,
      },
    });
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).json("Server error");
  }
}

/*

async function editCommentGet(req, res) {
  try {
    const 
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).send("Server error");
  }
}


// push editComment

async function editCommentPut(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).send("Server error");
  }
}

*/
// delete deletePost

async function deleteComment(req, res) {
  try {
    const commentId = Number(req.params.commentId);
    const comment = await prisma.comment.findFirst({
      where: {
        id: commentId,
        userId: req.user.id,
      },
    });

    if (!comment) return res.status(404).json("Comment not found.");

    await prisma.comment.delete({
      where: { id: commentId },
    });

    res.json({ message: "Post deleted", commentId });
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).json("Server error");
  }
}

module.exports = {
  newCommentPost,
  deleteComment,
};
