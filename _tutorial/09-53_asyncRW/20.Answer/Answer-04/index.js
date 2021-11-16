var path = require("path");
var fs = require("fs");
var util = require("util");

var readFile = util.promisify(fs.readFile);
var writeFile = util.promisify(fs.writeFile);

(async function () {
  try {
    var data = await readFile(path.join(__dirname, "sample.txt"), "utf8");
    await writeFile(path.join(__dirname, "sample-copy.txt"), data, "utf8");
    console.log("OK");
  } catch (err) {
    console.log(err.message);
  }
})();