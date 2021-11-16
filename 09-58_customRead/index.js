const rString = require('./randomstring');
const CustomReadableStream = require('./customreadablestream');

// 今回生成したランダム文字列（比較用）
console.log(rString);

// highWaterMark を指定すると、_read するときのサイズになる。指定しないと16K。
let reader = new CustomReadableStream(rString, {highWaterMark: 4, encoding: "utf-8"});
// data イベントは readの度に呼び出される
reader.on('data', (chunk) => {
  console.log(chunk);
});
// error イベントの処理
reader.on('error', (err) => {
  console.log(err.message);
});
reader.resume();
