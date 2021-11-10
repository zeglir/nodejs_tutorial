var sum = 0;
console.time("timer1");
for (var i = 1; i <= 1000; i++) {
  sum += i;
}
console.timeEnd("timer1");
