const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns 'cat' from [1, 2, 3, 10, 120, 'cat']", () => {
    assert.strictEqual(tail([1, 2, 3, 10, 120, 'cat']), 'cat');
  });
});


