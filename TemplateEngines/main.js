const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Handle bars -hbs",
    body: "Using hbs as a template Engine,let's try",
  });
});
app.listen(3000, () => {
  console.log("listening..");
});
