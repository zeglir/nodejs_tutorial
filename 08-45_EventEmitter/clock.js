const EventEmitter = require('events');

// 2秒ごとに "tick" イベントを発火するクラス
// EventEmitterクラスを継承して作成する
let Clock = class extends EventEmitter {
  constructor() {
    super();
    this.interval = 2000;
    this.timer = null;
  }

  // タイマーを開始する
  start() {
    // タイマーが既に開始していれば停止する
    if (this.timer) {
      this.stop();
    }
    // interval の間隔で "tick" を発火させる
    // setInterval の返り値は、停止するときの clearInterval で使用する
    this.timer = global.setInterval(() => {
      this.emit("tick");
    }, this.interval);
  }

  // タイマーを停止する
  stop() {
    // タイマーが無ければ何もしない
    if (!this.timer) {
      return;
    }
    // イベントループを停止する
    global.clearInterval(this.timer);
    this.timer = null;
  }
};

module.exports = Clock;