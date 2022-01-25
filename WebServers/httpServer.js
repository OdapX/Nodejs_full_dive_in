/* Creating a simple HTTP server that will keep track of the number of visits to the server and the
last time a visit occurred.

# **Step 2:** Create a function that will be called whenever a request is made to the server.
# 
# **Step 3:** Create a function that will be called whenever a request is made to the server.
# 
# **Step 4:** Create a function that will be called whenever a request is made to the server.
# 
# **Step 5:** Create a function that will be called */
const http = require("http");
let visits = 0;
let last_visit = Date.now();

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    visits++;

    visits == 0 ? (last_visit = 0) : (last_visit = Date.now() - last_visit);

    res.statusCode = 200;
    res.setHeader("content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");

    //table
    res.write("<center>");
    res.write("<table>");

    res.write("<tr>");

    res.write("<th>Description  </th>");

    res.write("<th>|Visits Counter | </th>");

    res.write("<th>Last visits | </th>");
    res.write("</tr>");
    res.write("<tr>");

    res.write(`<th>A web server <br/> with <br/> http.createServer</th>`);

    res.write(`<th>${visits}</th>`);

    res.write(`<th>${Math.floor(last_visit / 1000)} seconds ago</th>`);
    res.write("</tr>");

    //end table
    res.write("</table>");
    res.write("</center>");

    res.write("</body>");

    res.write("</html>");
    res.end();

    last_visit = Date.now();
  } else {
    res.statusCode = 404;
  }
});

server.listen(3000);
console.log("server listening on port 3000...");

// we can use the end method but we should make sure to set the content type :  req.setHeader("content-type","application/json")
// res.end(
//   JSON.stringify({
//     Description: "A web server with http.createServer",
//     number_of_visits: visits,
//     last_visit: `${Math.floor(last_visit / 1000)} seconds ago`,
//   })
// );
