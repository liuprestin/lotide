const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns empty array for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [2,3] as even amount of element", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
