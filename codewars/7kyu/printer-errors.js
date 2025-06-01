function printerError(s) {
  // return (
  //   s.split("").filter((e) => !"abcdefghijklm".includes(e)).length +
  //   "/" +
  //   s.length
  // );
  return s.replace(/[a-m]/g, "").length + "/" + s.length;
}

const { expect } = require("chai");

describe("printerError", function () {
  it("Basic tests", function () {
    const s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    expect(printerError(s)).to.equal("3/56");
  });
});
