function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

const { expect } = require("chai");

describe("findNextSquare", function () {
  it("should return the next square for perfect squares", function () {
    expect(findNextSquare(121)).to.equal(144, "Wrong output for 121");
    expect(findNextSquare(625)).to.equal(676, "Wrong output for 625");
    expect(findNextSquare(319225)).to.equal(320356, "Wrong output for 319225");
    expect(findNextSquare(15241383936)).to.equal(
      15241630849,
      "Wrong output for 15241383936",
    );
  });

  it("should return -1 for numbers which aren't perfect squares", function () {
    expect(findNextSquare(155)).to.equal(-1, "Wrong output for 155");
    expect(findNextSquare(342786627)).to.equal(
      -1,
      "Wrong output for 342786627",
    );
  });
});
