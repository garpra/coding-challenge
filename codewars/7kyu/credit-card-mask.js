// return masked string
function maskify(cc) {
  return cc.length > 4 ? "#".repeat(cc.length - 4) + cc.slice(-4) : cc;
}

const { expect } = require("chai");
describe("maskify", function () {
  it("should work for some examples", function () {
    expect(maskify("4556364607935616")).to.equal("############5616");
    expect(maskify("1")).to.equal("1");
    expect(maskify("11111")).to.equal("#1111");
  });
});
