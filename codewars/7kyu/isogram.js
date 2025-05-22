function isIsogram(str) {
  return new Set(str.toLowerCase()).size == str.length;
}

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("isIsogram", function () {
  it("Sample tests", function () {
    tester("Dermatoglyphics", true);
    tester("isogram", true);
    tester("aba", false);
    tester("moOse", false);
    tester("isIsogram", false);
    tester("", true);
  });
  const tester = (input, expected) => {
    assert.strictEqual(
      isIsogram(input),
      expected,
      `Failed for input: "${input}"\n`,
    );
  };
});
