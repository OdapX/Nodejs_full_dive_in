const http = require("http");
let visits = 0;
let last_visit = new Date().getSeconds();

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    visits++;

    visits == 0
      ? (last_visit = 0)
      : (last_visit = new Date().getSeconds() - last_visit);

    res.statusCode = 200;
    res.setHeader("content-Type", "application/json");
    res.end(
      JSON.stringify({
        page: "home",
        number_of_visits: visits,
        last_visit: `${last_visit} seconds ago`,
      })
    );

    last_visit = new Date().getSeconds();
  } else {
    res.statusCode = 404;
  }
});

server.listen(3000);
console.log("server listening on port 3000...");

// N.B:
//     http.createServer() is an event Emitter
//     note that http.createServer((req,res)=>{})  is  convenience syntax of server.on(request,(req,res)=>{}) -> the request is the event ,
//     triggering the callback
