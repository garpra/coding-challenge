function nbYear(p0, percent, aug, p) {
  let year = 0;

  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    year++;
  }

  return year;
}

const { expect } = require("chai");

describe("nbYear", function () {
  it("Basic tests", function () {
    expect(nbYear(1500, 5, 100, 5000)).to.equal(15);
    expect(nbYear(1500000, 2.5, 10000, 2000000)).to.equal(10);
    expect(nbYear(1500000, 0.25, 1000, 2000000)).to.equal(94);
    expect(nbYear(1000, 2.0, 50, 1214)).to.equal(4); // Did you maybe forget to round down population at the end of each year?
  });
});
