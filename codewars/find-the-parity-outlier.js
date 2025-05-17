function findOutlier(integers) {
  let even = integers.filter((e) => e % 2 == 0);
  let odd = integers.filter((e) => e % 2 != 0);
  return even.length > odd.length ? odd[0] : even[0];
}

const { expect } = require("chai"); // Import Chai assertion library

describe("findOutlier", () => {
  it("should return the outlier from the array", () => {
    expect(findOutlier([0, 1, 2])).to.equal(1);
    expect(findOutlier([1, 2, 3])).to.equal(2);
    expect(findOutlier([2, 6, 8, 10, 3])).to.equal(3);
    expect(findOutlier([0, 0, 3, 0, 0])).to.equal(3);
    expect(findOutlier([1, 1, 0, 1, 1])).to.equal(0);
  });
});
