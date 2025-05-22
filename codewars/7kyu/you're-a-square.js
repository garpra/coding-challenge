var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

const { expect } = require("chai");

describe("isSquare", function () {
  it("should work for some examples", function () {
    expect(isSquare(-1)).to.equal(
      false,
      "-1: Negative numbers cannot be square numbers",
    );
    expect(isSquare(0)).to.equal(true, "0 is a square number (0 * 0)");
    expect(isSquare(3)).to.equal(false, "3 is not a square number");
    expect(isSquare(4)).to.equal(true, "4 is a square number (2 * 2)");
    expect(isSquare(25)).to.equal(true, "25 is a square number (5 * 5)");
    expect(isSquare(26)).to.equal(false, "26 is not a square number");
  });
});
