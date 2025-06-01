function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let first = arr.slice(0, i).reduce((a, b) => a + b, 0);
    let last = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    if (first === last) {
      return i;
    }
  }
  return -1;
}

const { expect } = require("chai");

describe("FindEvenIndex", function () {
  it("should return 3 for [1,2,3,4,3,2,1]", function () {
    expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).to.equal(3);
  });

  it("should return 1 for [1,100,50,-51,1,1]", function () {
    expect(findEvenIndex([1, 100, 50, -51, 1, 1])).to.equal(1);
  });

  it("should return -1 for [1,2,3,4,5,6]", function () {
    expect(findEvenIndex([1, 2, 3, 4, 5, 6])).to.equal(-1);
  });

  it("should return 3 for [20,10,30,10,10,15,35]", function () {
    expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).to.equal(3);
  });
});
