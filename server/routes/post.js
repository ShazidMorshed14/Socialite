const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireSignIn = require("../Middleware/requireSignIn");

//importing Post model
const Post = mongoose.model("Post");

router.post("/createPost", requireSignIn, (req, res) => {
  const { title, body, photo } = req.body;

  if (!title || !body) {
    return res.status(422).json({ error: "Please give all the data" });
  } else {
    const post = new Post({
      title: title,
      body: body,
      photo: photo ? photo : "no photo",
      postedby: req.user,
    });

    post
      .save()
      .then((savedPost) => {
        res.json({ post: savedPost });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
