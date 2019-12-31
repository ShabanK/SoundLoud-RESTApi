const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const song = require("./routes/songs/song");
const app = express();

app.use(cors);
app.use(bodyParser.json());

const db = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to database");
  });

app.use("/songs", song);

app.listen(5000, () => {
  console.log("Server is live");
});
