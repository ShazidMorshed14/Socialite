const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireSignIn = require("../Middleware/requireSignIn");

//importing Post model
const Post = mongoose.model("Post");

router.get("/allpost", (req, res) => {
  Post.find()
    .populate("postedby", "_id name")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/mypost", requireSignIn, (req, res) => {
  Post.find({ postedby: req.user._id })
    .populate("postedby", "_id name")
    .then((mypost) => {
      res.json({ mypost: mypost });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createPost", requireSignIn, (req, res) => {
  const { title, body, photo } = req.body;

  if (!title || !body) {
    return res.status(422).json({ error: "Please give all the data" });
  } else {
    req.user.password = undefined; //for not showing the password
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
