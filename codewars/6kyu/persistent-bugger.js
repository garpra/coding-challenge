function persistence(num) {
  let multi = 0;
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((acc, curr) => acc * Number(curr), 1);
    multi++;
  }

  return multi;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39), 3);
    assert.strictEqual(persistence(4), 0);
    assert.strictEqual(persistence(25), 2);
    assert.strictEqual(persistence(999), 4);
  });
});
