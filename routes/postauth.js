const router = require("express").Router();
const userModel = require("../models/userSchema");

// get current user data.
router.get("/", (req, res) => {
  if (!req.user) {
    res.sendStatus(404);
  } else {
    res.send(req.user);
  }
});

// get current user data.
// router.get("/", (req, res) => {
//   //if not a user send 401 status code.
//   if (!req.user) {
//     res.sendStatus(401);
//   }
//   // if a registered user send current username and 200 code.
//   if (req.user) {
//     userModel.findById(req.user._id, (err, data) => {
//       res.status(200).send(data);
//     });
//   }
// });

module.exports = router;
