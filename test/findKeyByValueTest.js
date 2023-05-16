const assertArraysEqual   = require('../assertArraysEqual');
const assert = require("chai").assert;
const eqArrays = require("../findKeyByValueTest");

//Tests
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 

