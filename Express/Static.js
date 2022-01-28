const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "StaticSite")));

app.listen(3000, () => {
  console.log("Listening..");
});
