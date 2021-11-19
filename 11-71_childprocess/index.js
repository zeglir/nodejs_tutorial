const {fork} = require('child_process');
const path = require('path');

// 子プロセスを fork する
let child = fork(path.join(__dirname, 'child.js'), {execArgv : []});
// 子プロセス終了時のイベント。code はプロセスの終了コード
child.on('close', (code) => {
  console.log(`child process done with code ${code}`);
});
