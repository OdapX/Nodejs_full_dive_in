const express = require("express");
const users = require("./model.js");
const app = express();

//Middleware  calculating the time taken to respond
app.use((req, res, next) => {
  const startRequest = Date.now();
  console.log(`request on ${req.url}`);
  next();
  const endRequest = Date.now();
  console.log(`time elapsed to get response : ${endRequest - startRequest} ms`);
});

// built-in middleware to parse the request to json
app.use(express.json());

app.post("/users", (req, res) => {
  console.log("first");
  const name = req.body.name;

  if (name && req.body) {
    console.log("post request ");

    const user = { id: users.length, name: name };
    users.push(user);
    res.status(200).json({ message: "Post successfull" });
  } else {
    console.log("bad post request ");
    //res.status(400).json({ message: "invalid data" });
  }
});

app.get("/users/:userid", (req, res) => {
  const id = +req.params.userid;
  const user = users[id];
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "id not found" });
  }
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(3000, () => {
  console.log("started..");
});
