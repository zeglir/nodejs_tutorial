// 1から1000までの数を加算する時間を計測する
let sum = 0;
console.time("timer1");
for (let i = 1; i<=1000; i++) {
  sum += i;
}
console.timeEnd("timer1");