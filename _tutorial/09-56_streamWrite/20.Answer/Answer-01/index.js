var path = require("path");
var fs = require("fs");

var writer = fs.createWriteStream(path.join(__dirname, "created.txt"), "utf8");
writer.end("Hello World !");
