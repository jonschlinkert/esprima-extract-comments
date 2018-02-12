const util = require('util');
const extract = require('../');
console.log(util.inspect(extract('// this is a code comment'), { depth: null }));
// [ { type: 'Line',
//     value: ' this is a code comment',
//     range: [ 0, 25 ],
//     loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 25 } } } ]
