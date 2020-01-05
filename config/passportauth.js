const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/userSchema");
const mongoose = require("mongoose");

passport.use(
  new GoogleStrategy(
    {
      //options for the auth
      callbackURL: "/auth/google/redirect",
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          console.log(`user is ${currentUser}`);
        } else {
          new User({ username: profile.displayName, googleId: profile.id })
            .save()
            .then(newUser => {
              console.log(newUser);
            });
        }
      });
    }
  )
);
