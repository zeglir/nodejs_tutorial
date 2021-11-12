const fs = require('fs');
const path = require('path');

// 1. ファイルを同期的に読み込んでコンソール表示する

let data = fs.readFileSync(path.join(__dirname, 'sample.txt'), 'utf-8');
console.log(data);

// 2. 読み込んだファイルを別名で保存する
fs.writeFileSync(path.join(__dirname, 'sample-copied.txt'), data, 'utf-8');