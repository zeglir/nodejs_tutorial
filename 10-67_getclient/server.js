const http = require('http');
const fs = require('fs');
const path = require('path');

// 2. POSTリクエストの場合、リクエストボディーを返す
//    その他の場合、"sample.txt"を返却する
let server = http.createServer((req, res) => {
  console.log(
    `${new Date().toISOString()} ` +
    `[${req.method}] [${req.url}] ` +
    `[${req.headers['user-agent']}] `
  );

  // req, res ともに streamなので pipeでつなげることができる
  if (req.method === "POST") {
    req.pipe(res);
  } else {
    let reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8');
    reader.on('error', (err) => {
      console.log(err.message);
      res.statusCode = 500; // Internal Server Error
      res.end('Unexpected Server Error.');
    });
    reader.pipe(res);
  } 

});
server.listen(3000);

