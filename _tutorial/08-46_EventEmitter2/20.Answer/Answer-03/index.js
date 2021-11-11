var EventEmitter = require("events");
var ee = new EventEmitter();

ee.on("event", function () {
  console.log("function callback.", this);
});
ee.on("event", () => {
  console.log("array function callback.", this);
});

ee.emit("event");
