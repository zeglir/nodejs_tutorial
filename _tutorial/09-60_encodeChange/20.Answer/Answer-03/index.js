const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

var reader = fs.createReadStream(path.join(__dirname, "./sample.txt"));
var decoder = iconv.decodeStream("shiftjis");
reader.pipe(decoder);
decoder.on("data", (chunk) => {
  console.log(chunk);
});
