const path = require('path');
const fs = require('fs');

// 1. サンプルテキストをストリームで読み込み
let reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8');

// イベントを登録
// stream は EventEmitter のインスタンスなので on で登録する
let data = "";
reader.on("data", (chunk) => {
  data += chunk;
});

reader.on("end", () => {
  console.log(data);
});

// 読み込み開始
reader.resume();
