const CustomReader = require("./customreader.js");
var reader = new CustomReader();
reader.on("data", (chunk) => {
  console.log(chunk);
});
reader.resume();