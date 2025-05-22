function digPow(n, p) {
  let k = n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, curr, i) => acc + Math.pow(curr, i + p), 0);

  return k % n === 0 ? k / n : -1;
}

const assert = require("chai").assert;

describe("digPow", () => {
  it("digPow(89, 1) should return 1", () => {
    assert.strictEqual(digPow(89, 1), 1, `Incorrect answer for digPow(89, 1)`);
  });

  it("digPow(92, 1) should return -1", () => {
    assert.strictEqual(digPow(92, 1), -1, `Incorrect answer for digPow(92, 1)`);
  });

  it("digPow(46288, 3) should return 51", () => {
    assert.strictEqual(
      digPow(46288, 3),
      51,
      `Incorrect answer for digPow(46288, 3)`,
    );
  });
});
