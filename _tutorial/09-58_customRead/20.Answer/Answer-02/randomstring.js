module.exports = function (max = 10) {
  var data = [];
  var origin = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var length = origin.length;
  for (var i = 0; i < max; i++) {
    data[i] = origin[Math.floor(Math.random() * length)];
  }
  return data.join("");
};