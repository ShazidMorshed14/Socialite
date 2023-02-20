const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireSignIn = require("../Middleware/requireSignIn");

//importing Post model
const Post = mongoose.model("Post");

//importing User model
const User = mongoose.model("User");

router.get("/user/:id", requireSignIn, (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      Post.find({ postedby: req.params.id })
        .populate("postedby")
        .populate("comments.postedby")
        .sort({ _id: -1 })
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          } else {
            res.json({ user: user, posts: posts });
          }
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: err });
    });
});

router.put("/follow", requireSignIn, (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        User.findByIdAndUpdate(
          req.user._id,
          {
            $push: { following: req.body.followId },
          },
          {
            new: true,
          }
        )
          .select("-password")
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            return res.status(422).json({ error: err });
          });
      }
    }
  );
});

router.put("/unfollow", requireSignIn, (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $pull: { followers: req.user._id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        User.findByIdAndUpdate(
          req.user._id,
          {
            $pull: { following: req.body.followId },
          },
          {
            new: true,
          }
        )
          .select("-password")
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            return res.status(422).json({ error: err });
          });
      }
    }
  );
});

module.exports = router;
