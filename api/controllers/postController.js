// const prisma = require("../prisma");
const { body, validationResult } = require("express-validator");

// get newPost
async function newPostGet(req, res) {
  try {
  } catch (err) {
    console.error("ERROR with newPostGet: " + err);
    res.status(500).send("Server error");
  }
}

// post newPost

// get editPost

// post editPost

// post deletePost

module.exports = {};
