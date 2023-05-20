const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
});

//test each value
/*
assertEqual(tail([1,2,3,4])[0], [2,3,4][0]);
assertEqual(tail(["Hello", "World"])[0], "World");
*/
