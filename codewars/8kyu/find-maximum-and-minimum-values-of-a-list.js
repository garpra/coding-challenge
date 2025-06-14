var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

const { expect } = require("chai");

describe("min and max functions", function () {
  it("should return the correct minimum value", function () {
    expect(min([-52, 56, 30, 29, -54, 0, -110])).to.equal(-110);
    expect(min([42, 54, 65, 87, 0])).to.equal(0);
  });

  it("should return the correct maximum value", function () {
    expect(max([4, 6, 2, 1, 9, 63, -134, 566])).to.equal(566);
    expect(max([5])).to.equal(5);
  });
});
