require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const authRoutes = require("./routes/auth-routes");
const song = require("./routes/songs/song");
const passport = require("passport");
const passportSetup = require("./config/passportauth");
const cookieSession = require("cookie-session");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey]
  })
);
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to db
const db = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to database");
  });

app.use("/auth", authRoutes);
app.use("/songs", song);

app.get("/", (req, res) => {
  res.send("you are here");
});

app.listen(5000, () => {
  console.log("Server is live");
});
