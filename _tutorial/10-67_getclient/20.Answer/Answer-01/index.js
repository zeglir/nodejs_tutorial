var http = require("http");
var url = "http://localhost:3000/";
var options = {
  method: "GET"
};
var req = http.request(url, options, (res) => {
  res.pipe(process.stdout);
});
req.end();