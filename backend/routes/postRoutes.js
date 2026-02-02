const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create post
router.post("/", auth, async (req, res) => {
  const post = await Post.create({
    userEmail: req.user.email,
    text: req.body.text,
    image: req.body.image,
    likes: [],
    comments: []
  });
  res.json(post);
});

// Get feed
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Like
router.post("/:id/like", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user.email)) {
    post.likes.push(req.user.email);
  }
  await post.save();
  res.json(post);
});

// Comment
router.post("/:id/comment", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.comments.push({
    userEmail: req.user.email,
    text: req.body.text
  });
  await post.save();
  res.json(post);
});

module.exports = router;
