const {URL} = require('url');

let url = new URL('https://username:password@www.kore-ha-tutorial-desu.com:12345/index.html');
console.log(url.href);
console.log(url.protocol);
console.log(url.host);
console.log(url.hostname);
console.log(url.port);
console.log(url.username);
console.log(url.password);
 
