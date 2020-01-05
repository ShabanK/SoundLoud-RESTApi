require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const authRoutes = require("./routes/auth-routes");
const song = require("./routes/songs/song");
const passportSetup = require("./config/passportauth");

const app = express();

app.use(cors());
app.use(express.json());

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
