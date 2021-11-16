var path = require("path");
var fs = require("fs");

var data = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");
fs.writeFileSync(path.join(__dirname, "sample-copy.txt"), data, "utf8");
