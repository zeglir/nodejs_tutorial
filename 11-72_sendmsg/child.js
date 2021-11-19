const process = require('process');
// 親からのメッセージを受け取る
process.on('message', (data) => {
  console.log(data);
});

// 3秒後に子から親にメッセージを送信して子プロセスを終了する
setTimeout(() => {
  process.send("message from child.");
  // メッセージを送ったら終了する
  process.exit(0);
}, 3000);
