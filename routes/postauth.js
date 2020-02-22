const router = require("express").Router();
const userModel = require("../models/userSchema");

// get current user data.
router.get("/", (req, res) => {
  if (!req.user) {
    res.redirect("http://localhost:3000");
  } else {
    res.send(req.user);
  }
});

module.exports = router;
