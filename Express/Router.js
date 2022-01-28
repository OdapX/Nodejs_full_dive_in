const express = require("express");

const userRouter = require("./routes/users.router.js");
const app = express();

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("listening..");
});
