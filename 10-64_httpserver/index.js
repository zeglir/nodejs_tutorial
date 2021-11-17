const http = require('http');

let server = http.createServer((req, res) => {
  res.end("Hello World!");
});
server.listen(3000);

