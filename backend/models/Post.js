const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userEmail: String,
  text: String,
  image: String,
  likes: [String],        // emails of users
  comments: [
    {
      userEmail: String,
      text: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
