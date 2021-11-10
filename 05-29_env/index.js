const process = require('process');

// 1. 環境変数を一覧表示
// 標準built-inの JSONオブジェクトの stringify で成形する
console.log(JSON.stringify(process.env, null, 2));

// 2. 実行時引数を一覧表示
for(let i = 0; i < process.argv.length; i++) {
  console.log(`${i} : ${process.argv[i]}`);
}

// 3. カレントワークディレクトリ、実行中ファイルのディレクトリを表示
// 前者は、プログラムを実行したディレクトリ
// 後者は、プログラム自体のファイルパス
// になる
console.log(`process.cwd(): ${process.cwd()}`);
console.log(`__dirname    : ${__dirname}`);

// 4. 実行環境を表示
console.log(`platform: ${process.platform}`);
