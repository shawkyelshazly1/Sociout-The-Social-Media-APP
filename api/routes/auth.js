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
    res.status(500).json(err);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    // looking up user in DB
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User not found!");

    // validating password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong password!");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update user route

// Delete user route

// Get a single user route

// Follow user route

// UnFollow user route

module.exports = router;
