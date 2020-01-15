const router = require("express").Router();

// get current user data.
router.get("/", (req, res) => {
  res.send("you are here");
});

module.exports = router;
