const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

fs.writeFile(
  path.join(__dirname, "./test.txt"),
  iconv.encode("こんにちは", "shiftjis"),
  (err) => {
    console.log("OK");
  });
