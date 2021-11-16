const CustomReadableStream = require('./customreadablestream');
const CustomWritableStream = require('./customwritablestream');
const sRandam = require('./randomstring');

let reader = new CustomReadableStream(sRandam, {encoding : 'utf-8'});
let writer = new CustomWritableStream();

reader.on('error', (err) => {
  console.log(err.message);
});
writer.on('error', (err) => {
  console.log(err.message);
});

reader.pipe(writer);
reader.resume();
