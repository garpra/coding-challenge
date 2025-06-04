const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

const { assert } = require("chai");

describe("Ones and Zeros", () => {
  it("Example tests", () => {
    assert.strictEqual(
      binaryArrayToNumber([0, 0, 0, 1]),
      1,
      "binaryArrayToNumber([0, 0, 0, 1])",
    );
    assert.strictEqual(
      binaryArrayToNumber([0, 0, 1, 0]),
      2,
      "binaryArrayToNumber([0, 0, 1, 0])",
    );
    assert.strictEqual(
      binaryArrayToNumber([1, 1, 1, 1]),
      15,
      "binaryArrayToNumber([1, 1, 1, 1])",
    );
    assert.strictEqual(
      binaryArrayToNumber([0, 1, 1, 0]),
      6,
      "binaryArrayToNumber([0, 1, 1, 0])",
    );
  });
});
