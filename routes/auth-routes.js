const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("you are here login");
});

module.exports = router;
