var path = require("path");
var fs = require("fs");

fs.readFile(path.join(__dirname, "sample.txt"), "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(data);
});