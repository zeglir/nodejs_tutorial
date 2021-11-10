/*
******************************************************************************
* class を用いたクラス定義
* 現在推奨の方法。構文も分かりやすい
******************************************************************************
*/
// 親クラスの作成
// 予約語 class を使用
// 予約語 constructor でコンストラクタ定義
let Season = class {
  constructor(desc) {
    this.desc = desc;
  }

  introduce() {
    console.log("4 seasons in Japan.");
  }
};

// 継承クラスの作成
// super で親クラスのコンストラクタ、メソッドを呼び出す
let Fall = class extends Season {
  constructor(desc) {
    super(desc);
  }

  echo() {
    super.introduce();
  }

  introduce() {
    console.log(`The 3rd season. ${this.desc}`);
  }
};

// 実行
let season = new Fall("秋");
season.echo();
season.introduce();

/*
******************************************************************************
* function を用いたクラス定義（古い）
* はっきり言って構文含めて複雑すぎる。すでに deprecatedなメソッドもあり。
*******************************************************************************
*/
// 親クラス・コンストラクタ・メンバ変数の作成
let Fruits = function(desc) {
  this.desc = desc;
};
// 親クラスのメソッドの作成
Fruits.prototype.introduce = function() {
  console.log("I'm not vegitable.");
};

// utilモジュールを利用可能にする
let util = require('util');

// 継承クラスの作成
// util.iniheritsを使うことで、親クラスを表す特別な super_ プロパティが使えるようになる。
// これを利用して親クラスのコンストラクタを呼ぶ
let Apple = function(desc) {
  Apple.super_.call(this, desc);
};
util.inherits(Apple, Fruits);

// 継承クラスのメソッドの作成
// 親クラスのメソッド呼び出しには、super_ プロパティを使用する。
Apple.prototype.echo = function() {
  Apple.super_.prototype.introduce.call(this);
};

Apple.prototype.introduce = function() {
  console.log(`Red ball shape. ${this.desc}`);
};

// 実行
let fruits = new Apple("林檎");
fruits.echo();
fruits.introduce();
