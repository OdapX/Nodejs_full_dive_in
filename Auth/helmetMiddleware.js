const http = require("http");
const express = require("express");
const helmet = require("helmet");
const app = express();

require("dotenv").config();

app.use(helmet());

const configs = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};
const Auth_options = {
  CALLBACK_URL: "/auth/google/callback",
  CLIENT_ID: configs.CLIENT_ID,
  CLIENT_SECRET: configs.CLIENT_SECRET,
};
passport.use(new Strategy());

app.get("/", (req, res) => {
  res.send("sensitive data");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("listening on port 30000");
});

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("google profile", profile);
  done(null, profile);
}
