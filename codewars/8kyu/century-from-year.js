function century(year) {
  return Math.ceil(year / 100);
}

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(century(1705), 18, "Testing for year 1705");
    assert.strictEqual(century(1900), 19, "Testing for year 1900");
    assert.strictEqual(century(1601), 17, "Testing for year 1601");
    assert.strictEqual(century(2000), 20, "Testing for year 2000");
    assert.strictEqual(century(89), 1, "Testing for year 89");
  });
});
