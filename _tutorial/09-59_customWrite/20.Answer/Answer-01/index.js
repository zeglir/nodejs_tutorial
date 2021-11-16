const CustomReader = require("./customreader.js");
const CustomWriter = require("./customwriter.js");

var reader = new CustomReader();
var writer = new CustomWriter();
reader.pipe(writer);
reader.resume();