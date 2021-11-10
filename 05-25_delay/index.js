// setTimeoutを使ってみる
// アロー関数でコールバック関数を定義
setTimeout(() => {
  console.log("setTimeout.");
}, 300);

console.log("global");

// 重い処理を実行
// 3secループを回す
// この間、シングルスレッドで動いているため、setTimeoutの結果はその後で表示される
var end = (new Date()).getTime() + 3000;
while((new Date()).getTime() < end) {}
