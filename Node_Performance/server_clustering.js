const express = require("express");
const cluster = require("cluster");

const PORT = 8000;

const app = express();

//Simulate a long blocking request that could potential retard the event loop
function delay(delay) {
  const start = Date.now();
  while (Date.now() - start < delay) {}
}

app.get("/", (req, res) => {
  res.send(`Handeled by worker pid : ${process.pid}`);
});

app.get("/delay", (req, res) => {
  delay(5000);
  res.send(`Handled by proceess pid ${process.pid}`);
});

if (cluster.isMaster) {
  console.log("Master forking...");
  cluster.fork();
  cluster.fork();
} else {
  app.listen(PORT, () => {
    console.log(`worker process created with pid ${process.pid} port ${PORT}`);
  });
}
