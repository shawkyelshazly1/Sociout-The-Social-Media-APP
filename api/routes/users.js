const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("From users page");
});

module.exports = router;
