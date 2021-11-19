const {fork} = require('child_process');
const path = require('path');

let child = fork(path.join(__dirname, 'child.js'), {execArgv: []});
// 子から親へのメッセージを受け取る
child.on('message', (data) => {
  console.log(data);
});
// 子プロセス終了時
child.on('close', (code) => {
  console.log(`child process exit with code ${code}.`);
});

// 親から子にメッセージを送信する
child.send("message from parent.");
