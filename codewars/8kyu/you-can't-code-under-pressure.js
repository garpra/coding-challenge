function doubleInteger(i) {
  return i * 2;
}

const { expect } = require("chai");

describe("doubleInteger", () => {
  it("should double the input number", () => {
    expect(doubleInteger(2)).to.equal(4);
  });
});
