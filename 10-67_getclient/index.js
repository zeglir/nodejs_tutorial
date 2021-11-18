const http = require('http');

let URL = 'http://localhost:3000/';
let options = {
  method : "GET"
};

let request = http.request(URL, options, (res) => {
  // process.stdout は streamなので pipeでつなげることができる
  // VSCodeでデバッグ実行する場合、デフォルトでは標準出力は表示されないことに注意
  // launch.json を設定して "outputCapture": "std" とする
  res.pipe(process.stdout);
});
request.end();
