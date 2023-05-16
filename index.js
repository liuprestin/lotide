const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const joinList = require('./joinList');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const min = require('./min');
const takeUntil = require('./takeUntil');
const without = require('./without');

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
    joinList,
    findKeyByValue,
    letterPositions,
    map,
    min,
    takeUntil,
    without
};