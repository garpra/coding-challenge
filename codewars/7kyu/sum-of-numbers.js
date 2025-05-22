function getSum(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(getSum(0, -1), -1);
    assert.strictEqual(getSum(0, 1), 1);
    assert.strictEqual(getSum(2, 2), 2);
  });
});
