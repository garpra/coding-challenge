function litres(time) {
  return Math.floor(time / 2);
}

const chai = require("chai");
const assert = chai.assert;

describe("Fixed tests", () => {
  it("Basic Test Cases", () => {
    assert.strictEqual(litres(0), 0, "litres(0) should return 0");
    assert.strictEqual(litres(1), 0, "litres(1) should return 0");
    assert.strictEqual(litres(2), 1, "litres(2) should return 1");
    assert.strictEqual(litres(3), 1, "litres(3) should return 1");
    assert.strictEqual(litres(4), 2, "litres(4) should return 2");
  });

  it("Fixed Test Cases", () => {
    assert.strictEqual(litres(1.4), 0, "litres(1.4) should return 0");
    assert.strictEqual(litres(12.3), 6, "litres(12.3) should return 6");
    assert.strictEqual(litres(0.82), 0, "litres(0.82) should return 0");
    assert.strictEqual(litres(11.8), 5, "litres(11.8) should return 5");
    assert.strictEqual(litres(1787), 893, "litres(1787) should return 893");
  });
});
