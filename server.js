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
const postauth = require("./routes/postauth");
const postauth2 = require("./routes/postauth2");
const app = express();

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, credentials"
  );

  res.setHeader(
    "Access-Control-Request-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, credentials"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

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
app.use("/postauth", postauth);
app.use("/postauth2", postauth2);

app.get("/", (req, res) => {
  res.send("you are here");
});

app.listen(5000, () => {
  console.log("Server is live");
});
