const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("From auth page");
});

module.exports = router;
