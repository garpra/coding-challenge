function booleanToString(b) {
  return "" + b;
}

const { expect } = require("chai");

describe("booleanToString", () => {
  it("should return 'true' when passed true", () => {
    expect(booleanToString(true)).to.equal("true");
  });

  it("should return 'false' when passed false", () => {
    expect(booleanToString(false)).to.equal("false");
  });
});
