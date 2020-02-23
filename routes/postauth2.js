const router = require("express").Router();

function authCheck(req, res, next) {
  if (req.user) {
    res.redirect("http://localhost:3000/home");
  }
}

router.get("/", authCheck, (req, res) => {
  if (req.user) {
    res.send("ok boss");
  }
});

module.exports = router;
