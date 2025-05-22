const stringToNumber = function (str) {
  return Number(str);
};

const { expect } = require("chai");

describe("stringToNumber", function () {
  it("should work for the examples", function () {
    expect(stringToNumber("1234")).to.equal(1234);
    expect(stringToNumber("605")).to.equal(605);
    expect(stringToNumber("1405")).to.equal(1405);
    expect(stringToNumber("-7")).to.equal(-7);
  });
});
