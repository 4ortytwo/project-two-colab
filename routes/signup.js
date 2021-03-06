const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render("signup");
});

router.post("/", (req, res) => {
  // const {username, } = req.body

  let newUser = {
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
    dateOfBirth: req.body.dateOfBirth,
    pictureUrl: req.body.pictureUrl,
  };

  bcrypt.hash(req.body.password, 10, function (err, hash) {
    // Store hash in your password DB.
    newUser.password = hash;

    User.create(newUser, err => {
      err
        ?
        res.status(500).send("User not created") :
        res.status(200).send("user-created");
    });
  });
});

module.exports = router;