const { default: mongoose } = require("mongoose");

const router = require("express").Router(),
  User = require("../models/User"),
  bcrypt = require("bcrypt");

// Register route
router.post("/register", async (req, res) => {
  try {
    // hashing the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // creating new user object from mongoose mdoel
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // saving user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});




module.exports = router;
