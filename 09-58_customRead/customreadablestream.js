const { cursorTo } = require('readline');
const {Readable} = require('stream');

// 2. ランダム文字列を読み取る CustomReadableStream を作成
let CustomReadableStream = class extends Readable {
  constructor(data, options) {
    super(options || {encoding : "utf-8"});
    this._data = data;
    this._current = 0;
  }

  _read(size) {
    // 今回の処理で this.dataを読み取る範囲を決める
    let start = this._current;
    let end = (start + size < this._data.length) ? start + size : this._data.length;

    try {
      // 範囲分の文字列を切り出して push する
      let chunk = this._data.slice(start, end);
      this.push(chunk);
    } catch(err) {
      // 例外処理。定型的な記述。
      // nextTick のコールバック関数で、errorイベントを発火する。
      // stream利用側で、EventEmitter.on('error', ～) で受け取ることができる。
      process.nextTick(() => {
        this.emit('error', err);
      });
      return;
    }

    // 次の読み込み開始位置を変更する
    if (start + size < this._data.length) {
      this._current = end;
    } else {
      this.push(null); // 読み取り終了
    }
  }
};

module.exports = CustomReadableStream;