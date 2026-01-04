// const prisma = require("../prisma");
const { body, validationResult } = require("express-validator");

// get newComment
async function newComment(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with newCommentGet: " + err);
    res.status(500).send("Server error");
  }
}

// post newComment

// get editComment

// push editComment

// delete deletePost

module.exports = {};
