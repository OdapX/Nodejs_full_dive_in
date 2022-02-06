const http = require("http");
const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("sensitive data");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("listening on port 30000");
});
