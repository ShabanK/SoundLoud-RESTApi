require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const path = require("path");
const User = require("../models/userSchema");

passport.use(
  new GoogleStrategy(
    {
      //options for the auth
      callbackURL: "/auth/google/redirect",
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      new User({ username: profile.displayName, googleId: profile.id }).then();
      console.log("PASS PORT CALL BACK!");
      done();
    }
  )
);
