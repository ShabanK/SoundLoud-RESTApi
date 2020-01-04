const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

passport.use(
  new GoogleStrategy(
    {
      //options for the auth
      callbackURL: "/auth/google/redirect",
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret
    },
    () => {}
  )
);
