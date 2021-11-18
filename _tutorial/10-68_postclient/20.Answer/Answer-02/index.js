var http = require("http");
var data = "Hello World !";
var url = "http://localhost:3001/";
var options = {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
    "Content-Length": Buffer.byteLength(data)
  }
};
var request = http.request(url, options, (response) => {
  response.pipe(process.stdout);
});
request.on("error", (err) => {
  console.log(err.message);
});
request.end();