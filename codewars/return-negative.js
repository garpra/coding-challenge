function makeNegative(num) {
  return -Math.abs(num);
}

const { expect } = require("chai");

describe("makeNegative", () => {
  it("should return -42 when given 42", () => {
    expect(makeNegative(42)).to.equal(-42);
    expect(makeNegative(-9)).to.equal(-9);
  });
});
