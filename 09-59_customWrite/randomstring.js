// 1. ランダム文字列を生成するモジュール RandomString を作成

const origin = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const max = 20;

let rString = "";
for (let i = 0; i < max; i++) {
  let index = Math.floor((Math.random()*origin.length));
  rString += origin[index];
}

module.exports = rString;
