const express = require("express");

const users = require("../model.js");
const app = express();

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json(users);
});

userRouter.get("/:userId", (req, res) => {
  res.status(200).json(users[+req.params.userId]);
});

module.exports = userRouter;
