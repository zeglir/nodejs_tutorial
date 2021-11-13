var path = require("path");
var fs = require("fs");
var util = require("util");

var readFile = util.promisify(fs.readFile);
var writeFile = util.promisify(fs.writeFile);

readFile(path.join(__dirname, "sample.txt"), "utf8")
  .then((data) => {
    return writeFile("sample-copy.txt", data, "utf8");
  })
  .then(() => {
    console.log("OK");
  })
  .catch((err) => {
    console.log(err.message);
  });
