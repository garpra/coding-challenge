var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const assert = require("chai").assert;

describe("summation", function () {
  it("should return the correct total", function () {
    assert.strictEqual(summation(1), 1);
    assert.strictEqual(summation(2), 3);
    assert.strictEqual(summation(8), 36);
  });
});
