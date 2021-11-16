const path = require('path');
const fs = require('fs');

// 1. 任意の文字列をテキストファイル出力する
const text = "Hello World !";
let writer1 = fs.createWriteStream(path.join(__dirname, 'hello.txt'), 'utf-8');
writer1.end(text);

// 2. 読み込んだファイルをパイプして出力する
let reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8');
let writer2 = fs.createWriteStream(path.join(__dirname, 'sample-copied.txt'), 'utf-8');

// エラー時イベントと読み込み終了時イベントを登録
reader.on('error', (err) => {
  console.log(err.message);
});
reader.on('end', () => {
  console.log("read done.");
});
// エラー時イベントと読み込み終了時イベントを登録
writer2.on('error', (err) => {
  console.log(err.message);
});
writer2.on('finish', () => {
  console.log("write finished.");
})

reader.pipe(writer2);  
