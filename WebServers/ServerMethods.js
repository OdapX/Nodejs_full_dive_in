const http = require("http");

const Names = ["jhon", "ben", "adam", "don"];

const server = http.createServer((req, res) => {
  const Url_Params = req.url.split("/");

  if (req.method === "GET" && Url_Params[1].toLowerCase() === "names") {
    res.end(JSON.stringify(Names));
  } else if (req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>404</h1>");
    res.write("<h3>try GET:/Names</h3>");
    res.end();
  } else if (req.method === "POST" && Url_Params[1].toLowerCase() === "names") {
    req.on("data", (name) => {
      Names.push(name.toString());
      console.log(Names);
    });
  }
});

server.listen(3000);
console.log("server stared..");
