function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((e) => Number(e) ** 2)
      .join(""),
  );
}

const { assert } = require("chai");

describe("Basic tests", () => {
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
});
