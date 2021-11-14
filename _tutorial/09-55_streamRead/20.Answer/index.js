var path = require("path");
var fs = require("fs");
var data = "";
var reader = fs.createReadStream(path.join(__dirname, "sample.txt"), "utf8");
reader.on("data", (chunk) => {
  data += chunk;
});
reader.on("end", ()=>{
  console.log(data);
});
reader.resume();
