const router = require("express").Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("http://localhost:3000/");
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  res.json(req.user);
});

module.exports = router;
