const {echo, area} = require('./module');
const Fall = require('./fall');

echo("Hello World !");
echo(area(10, 5));

let fall = new Fall("秋");
fall.echo();
fall.introduce();

console.log(JSON.stringify(require('./config'), null, 2));