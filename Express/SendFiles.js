const express = require("express");
const path = require("path");

const app = express();

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Images", "libuv.png"));
});

app.use("/Image", mainRouter);

app.listen(3000, () => {
  console.log("listening..");
});
