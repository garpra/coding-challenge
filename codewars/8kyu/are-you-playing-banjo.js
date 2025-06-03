function areYouPlayingBanjo(name) {
  // return name.charAt(0).toLowerCase() === "r"
  //   ? `${name} plays banjo`
  //   : `${name} does not play banjo`;

  return (
    name +
    (name.charAt(0).toLowerCase() === "r" ? " plays " : " does not play ") +
    "banjo"
  );
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(
      areYouPlayingBanjo("bravo"),
      "bravo does not play banjo",
    );
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
  });
});
