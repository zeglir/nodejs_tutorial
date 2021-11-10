// ESMバージョン

// 遅延実行メソッド4種類を実行して、実行順序を確認する
//
// udemyのチュートリアル（CJS）では、
// nextTick → Promise.resolve.then → setImmediate → setTimeout の順序だったが、
// このESMバージョンでは、
// Promise.resolve.then → nextTick → setImmediate → setTimeout の順序で表示される。

import process from 'process';

// setTimeout: Timers フェーズで実行される
setTimeout(() => {
  console.log("setTimeout()");
}, 100);

// setImmediate：check フェーズで実行される
setImmediate(() => {
  console.log("setImmediate()");
});

// nextTick：nextTickQueue キュー処理で実行される
// processグローバルオブジェクトには、現在のNode.jsプロセスの情報が格納される
process.nextTick(() => {
  console.log("nextTick()");
});

// Promise.resolve().then()：microTaskQueue キュー処理で実行される
Promise.resolve().then(() => {
  console.log("Promise.resolve().then()");
});
