// const prisma = require("../prisma");
const { body, validationResult } = require("express-validator");

// get newComment
async function newCommentGet(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).send("Server error");
  }
}

async function newCommentPost(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).send("Server error");
  }
}

async function editCommentGet(req, res) {
  try {
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

// delete deletePost

async function deleteComment(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).send("Server error");
  }
}

module.exports = {
  newCommentGet,
  newCommentPost,
  editCommentGet,
  editCommentPut,
  deleteComment,
};
