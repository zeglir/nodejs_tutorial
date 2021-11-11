const Clock = require('./clock');
let clock = new Clock();

// Clockインスタンスで "tick" が発火するたびに実行する処理を登録する
let i = 0;
clock.on("tick", () => {
  // カウンタを表示する
  console.log(++i);
  // カウンタが 3より大きくなったら停止する
  if (i > 3) {
    clock.stop();
  }
});

clock.start();