// index.js for Lotide library
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const joinList = require('./joinList');

/*
// kept this for Node 12 compatibility
module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  joinList: joinList
};
*/

//ES6 syntax
module.exports = {
    head,
    tail,
    middle,
    flatten,
    joinList
};