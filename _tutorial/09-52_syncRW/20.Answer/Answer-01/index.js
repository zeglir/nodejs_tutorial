var path = require("path");
var fs = require("fs");

var data = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");
console.log(data);