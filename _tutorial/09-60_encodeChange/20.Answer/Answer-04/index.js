const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

var encoder = iconv.encodeStream("shiftjis");
var writer = fs.createWriteStream(path.join(__dirname, "./test.txt"));
encoder.pipe(writer);
encoder.write("こんにちは");
encoder.end();
