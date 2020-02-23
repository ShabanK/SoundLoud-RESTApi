const router = require("express").Router();

// get current user data.
router.get("/", (req, res) => {
  if (!req.user) {
    res.redirect("http://localhost:3000");
  } else {
    res.send(req.user);
  }
});

module.exports = router;
