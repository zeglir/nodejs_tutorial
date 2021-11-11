var EventEmitter = require("events");
var ee = new EventEmitter();

var ontick = function () {
  console.log("'event' is called.");
  ee.off("event", ontick);
};

ee.on("event", ontick);

ee.emit("event");
ee.emit("event");
