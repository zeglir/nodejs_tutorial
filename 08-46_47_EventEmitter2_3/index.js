const EventEmitter = require('events');

//******************************************************************************
// off で手動でリスナを削除するケース
//******************************************************************************
let ee = new EventEmitter();

// EventEmitterの発火時に実行される処理の定義
const listener = function() {
  console.log("ontick event fired.");
  // 実行されたらリスナを削除する
  ee.off("ontick", listener);
};

// EventEmitterにリスナを登録
ee.on("ontick", listener);
// 2回発火させるが、リスナは1回目の実行で削除される（ので2回目は何も出力されない）
ee.emit("ontick");
ee.emit("ontick");

//******************************************************************************
// once で一回限りでリスナを削除するケース
//******************************************************************************
let eeOne = new EventEmitter();

const oneListener = function() {
  console.log("once event fired.");
};

// EventEmitterにリスナを登録
eeOne.once("once", oneListener);
// 2回発火させるが、リスナは1回目の実行で削除される（ので2回目は何も出力されない）
eeOne.emit("once");
eeOne.emit("once");

//******************************************************************************
// function と アロー関数の this の扱いの違い
// イベントを発火すると on した順序でリスナが処理される
//******************************************************************************
let eeThis = new EventEmitter();
let externalThis = this;

const funcListener = function() {
  console.log("function listener fired.");
  // function の this は呼び出し元のオブジェクト
  console.log(eeThis === this);        // true
  console.log(externalThis === this);  // false
};
const arrowListener = () => {
  console.log("arrow listener fired.");
  // アロー関数の this は関数を定義したときの外側の this
  console.log(eeThis === this);        // false
  console.log(externalThis === this);  // true
};

eeThis.on("this", funcListener);
eeThis.on("this", arrowListener);
// on した順序でリスナが実行される。funcListener → arrowListener
eeThis.emit("this");
