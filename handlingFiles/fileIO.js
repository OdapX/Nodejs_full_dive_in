// tutorial File I/O
const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("random.csv")
  .pipe(
    parse({
      columns: true,
    })
  )
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    results.map((rs) => {
      rs.name == "awec" ? console.log(rs) : console.log("not found", rs);
    });
    console.log("done !");
  });
