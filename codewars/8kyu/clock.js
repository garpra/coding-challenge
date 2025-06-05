function past(h, m, s) {
  return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}

const { assert } = require("chai");

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.strictEqual(past(0, 1, 1), 61000);
    assert.strictEqual(past(1, 1, 1), 3661000);
    assert.strictEqual(past(0, 0, 0), 0);
    assert.strictEqual(past(1, 0, 1), 3601000);
    assert.strictEqual(past(1, 0, 0), 3600000);
  });
});
