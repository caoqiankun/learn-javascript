'use strict';

// read binary data from 'sample.txt'

const fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');
console.log("print a test world");
rs.pipe(ws);
