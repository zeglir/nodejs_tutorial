var { echo, area } = require("./methods");
var Lamborghini = require("./lamborghini");

echo("Hello World !");
console.log(area(3, 5));

var car = new Lamborghini("lamborghini");
car.echo();
car.drive();

