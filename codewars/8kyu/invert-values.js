function invert(array) {
  return array.map((n) => -n);
}

const { expect } = require("chai");

describe("Invert array values", () => {
  const norm = (arr) => arr.map((n) => (Object.is(n, -0) ? 0 : n));

  it("should invert positive numbers", () => {
    expect(norm(invert([1, 2, 3, 4, 5]))).to.deep.equal([-1, -2, -3, -4, -5]);
  });

  it("should invert mixed numbers", () => {
    expect(norm(invert([1, -2, 3, -4, 5]))).to.deep.equal([-1, 2, -3, 4, -5]);
  });

  it("should handle empty array", () => {
    expect(norm(invert([]))).to.deep.equal([]);
  });

  it("should handle zero correctly", () => {
    expect(norm(invert([0]))).to.deep.equal([0]);
  });
});
