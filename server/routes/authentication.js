const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const router = express.Router();

const { JWT_SECRET } = require("../valuekeys");

//importing the middleware
const requiredSignIn = require("../Middleware/requireSignIn");

//importing the User Model
const User = mongoose.model("User");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(422).json({ error: "You need to give all the information" });
  } else {
    User.findOne({ email: email })
      .then((prevUser) => {
        if (prevUser) {
          return res.status(409).json({ error: "User Already Exists" });
        } else {
          bcrypt
            .hash(password, 12)
            .then((hashedPassword) => {
              const user = new User({
                name: name,
                email: email,
                password: hashedPassword,
              });

              user
                .save()
                .then((userResponse) => {
                  res.status(200).json({
                    message: "User saved Successfully",
                    userDetails: userResponse,
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please give email and password" });
  } else {
    User.findOne({ email: email })
      .then((foundUser) => {
        if (!foundUser) {
          res.status(404).json({ error: "No user found with this email" });
        } else {
          bcrypt
            .compare(password, foundUser.password)
            .then((doMatch) => {
              if (doMatch) {
                const token = jwt.sign({ _id: foundUser._id }, JWT_SECRET);

                res.json({ token: token });
              } else {
                res.status(422).json({ error: "Invalid Email or Password" });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.get("/protected", requiredSignIn, (req, res) => {
  res.send("Hello User");
});

module.exports = router;
