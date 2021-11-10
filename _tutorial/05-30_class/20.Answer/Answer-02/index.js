var util = require("util");

// �e�N���X�̒�`
var Car = function (name) {
  this.name = name;
};

Car.prototype.drive = function () {
  console.log("zoom zoom ...");
};

// �q�N���X�̒�`
var Lamborghini = function (name) {
  Lamborghini.super_.call(this, name);
};
util.inherits(Lamborghini, Car);

Lamborghini.prototype.echo = function () {
  Lamborghini.super_.prototype.drive.call(this);
};

Lamborghini.prototype.drive = function () {
  console.log(`fire ${this.name}`);
};


// ���s
var car = new Lamborghini("lamborghini");
car.echo();
car.drive();
