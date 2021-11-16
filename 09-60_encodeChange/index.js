const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

// 1. 非同期関数で Shift-JIS ファイルを読み込んでコンソール表示
fs.readFile(path.join(__dirname, 'sample.txt'), (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("1. done.");
    console.log(iconv.decode(data, 'shiftjis'));
  }
});

// 2. 非同期関数で Shift-JIS ファイルを書き込み
// writeFile でいつも 'utf-8'を指定する encoding オプションは、data が Buffer の場合は無視される
let bufHello = iconv.encode("こんにちは、世界！", 'shiftjis');
fs.writeFile(path.join(__dirname, 'hello_sjis.txt'), bufHello, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("2. done.");
  }
});

// 3. ストリームで Shift-JIS ファイルを読み込み
let txt = "";
const reader3 = fs.createReadStream(path.join(__dirname, 'sample.txt'));
const decoder3 = iconv.decodeStream('shiftjis');
decoder3.on('data', (chunk) => {
  txt += chunk;
});
decoder3.on('end', () => {
  console.log(txt);
  console.log("3. done");
});
reader3.pipe(decoder3);

// 4. ストリームで Shift-JIS ファイルを書き込み
const writer4 = fs.createWriteStream(path.join(__dirname, 'sample-sjis2.txt'));
const encoder4 = iconv.encodeStream('shiftjis');
encoder4.on('finish', () => {
  console.log("4. done");
});
encoder4.pipe(writer4);
encoder4.write("こんにちは、世界！");
encoder4.end();

// 5. ストリームで Shift-JIS ファイルを読み込んで Shift-JIS ファイルとして書き込み
// ずっとバイナリ（Buffer）で扱うので iconv は不要
const reader5 = fs.createReadStream(path.join(__dirname, 'sample.txt'));
const writer5 = fs.createWriteStream(path.join(__dirname, 'sample-sjis5.txt'));
reader5.on('end', () => {
  console.log("5. read done.");
});
writer5.on('finish', () => {
  console.log("5. write done");
});
reader5.pipe(writer5);
