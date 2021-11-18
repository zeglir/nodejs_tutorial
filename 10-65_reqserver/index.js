const http = require('http');

let server = http.createServer((req, res) => {
console.log(
  `${new Date().toISOString()} ` +
  `[${req.method}] [${req.url}] ` +
  `[${req.headers["user-agent"]}] `
);

  res.end('Hello World!');
});
server.listen(3000);