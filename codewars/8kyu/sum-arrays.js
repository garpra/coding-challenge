function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

const { expect } = require("chai");

describe("sum", () => {
  it("should return 0 for an empty array", () => {
    expect(sum([])).to.equal(0);
  });

  it("should return the correct sum for an array of numbers", () => {
    expect(sum([1, 5.2, 4, 0, -1])).to.equal(9.2);
  });
});
