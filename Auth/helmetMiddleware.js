const fs = require("fs");
require("dotenv").config();
const path = require("path");
const https = require("https");
const helmet = require("helmet");
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { Strategy } = require("passport-google-oauth20");

const configs = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.Cookie_key_1,
  COOKIE_KEY_2: process.env.Cookie_key_2,
};

const Auth_options = {
  callbackURL: "/auth/google/callback",
  clientID: configs.CLIENT_ID,
  clientSecret: configs.CLIENT_SECRET,
};

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});
const app = express();
app.use(helmet());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000, //1 day
    keys: [configs.COOKIE_KEY_1, configs.COOKIE_KEY_2],
  })
);

app.use(passport.initialize());
app.use(passport.session());

function verifyCallback(accessToken, refreshToken, profile, done) {
  done(null, profile);
}
passport.use(new Strategy(Auth_options, verifyCallback));

function LoggedIn(req, res, next) {
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(400).json({ message: "please Log in first" });
  }
  next();
}

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: true,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.get("/auth/logout", (req, res) => {
  req.logout();
  return res.redirect("/");
});

app.get("/sensitive", LoggedIn, (req, res) => {
  res.send("sensitive data");
});

app.get("/", (req, res) => {
  return res.status(200).send("GOT /");
});

const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
  },
  app
);

server.listen(3000, () => {
  console.log("listening on port 3000");
});

function verifyCallback(accessToken, refreshToken, profile, done) {
  //console.log("google profile", profile);
  done(null, profile);
}
