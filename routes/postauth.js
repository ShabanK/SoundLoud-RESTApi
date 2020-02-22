const router = require("express").Router();
const userModel = require("../models/userSchema");

// get current user data.
router.get("/", (req, res) => {
  if (!req.user) {
    res.send("nothing to see here boss");
  } else {
    res.send(req.user);
  }
});

module.exports = router;
