function addBinary(a, b) {
  return (a + b).toString(2);
}

const { expect } = require("chai");

describe("addBinary", function () {
  it("should return something that isn't falsy", function () {
    const result = addBinary(1, 2);
    expect(result).to.be.ok; // Checks that result is not falsy
  });

  it('should return "11"', function () {
    const result = addBinary(1, 2);
    expect(result).to.equal("11");
  });
});
