const path = require('path');
// 1. "C:\\sample\index.html" というパスから以下の文字列を取り出す
//   1) ディレクトリ名
//   2) ファイル名
//   3) 拡張子名

const s = 'C:\\\\sample\\index.html';
console.log(path.dirname(s));
console.log(path.basename(s));
console.log(path.extname(s));

// 2. "C:\\sample" と "index.html" をパスとして文字列結合

console.log(path.join('C:\\\\sample', 'index.html'));

const pair = ['C:\\\\sample', 'index.html'];
console.log(pair.join(path.sep));

// 3. "C:\\sample\lib\..\index.html" というパスを正規化

console.log(path.normalize('C:\\\\sample\\lib\\..\\index.html'));
