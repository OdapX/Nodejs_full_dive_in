const express = require("express");
const cluster = require("cluster");
const os = require("os");
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
  //this is maximizing clustering according to the piece of hardware used
  console.log(os.cpus().length); //number of cpu cores available in ur hardware
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  app.listen(PORT, () => {
    console.log(`worker process created with pid ${process.pid} port ${PORT}`);
  });
}

/*
 In real life we usually use pm2 package -process Manager -  that makes our life much easier 
 but it's good to know clustering as it's what used by pm2 under the hood

*/
