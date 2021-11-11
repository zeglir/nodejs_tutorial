var EventEmitter = require("events");
var ee = new EventEmitter();

var ontick = function () {
  console.log("'event' is called.");
};

ee.once("event", ontick);

ee.emit("event");
ee.emit("event");