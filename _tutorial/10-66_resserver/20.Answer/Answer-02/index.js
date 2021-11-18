var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer((req, res) => {
  console.log(
    `[${(new Date()).toISOString()}] ` +
    `${req.method} ${req.url} - ` +
    `${req.headers["user-agent"]}`
  );
  if (req.method === "POST") {
    req.pipe(res);
  } else {
    var reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
    reader.pipe(res);  
  }
});
server.listen(3000);