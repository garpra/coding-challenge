function digitalRoot(n) {
  if (n < 10) return n;

  let sum = n
    .toString()
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);

  return digitalRoot(sum);
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(digitalRoot(16), 7);
    assert.strictEqual(digitalRoot(456), 6);
  });
});
