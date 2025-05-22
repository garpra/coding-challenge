function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

const { expect } = require("chai");

describe("longest", function () {
  it("Basic tests", function () {
    expect(longest("aretheyhere", "yestheyarehere")).to.equal("aehrsty");
    expect(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
    ).to.equal("abcdefghilnoprstu");
    expect(longest("inmanylanguages", "theresapairoffunctions")).to.equal(
      "acefghilmnoprstuy",
    );
  });
});
