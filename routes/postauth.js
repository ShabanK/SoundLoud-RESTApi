const router = require("express").Router();
const userModel = require("../models/userSchema");

// get current user data.
router.get("/", (req, res) => {
  res.send("okay now what");
});

module.exports = router;
