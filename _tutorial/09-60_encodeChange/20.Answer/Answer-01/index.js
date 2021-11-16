const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

fs.readFile(path.join(__dirname, "./sample.txt"), (err, data) => {
  console.log(iconv.decode(data, "shiftjis"));
});

