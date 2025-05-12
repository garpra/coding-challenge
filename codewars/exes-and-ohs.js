function XO(str) {
  str = str.toLowerCase().split("");
  return (
    str.filter((e) => e == "o").length == str.filter((e) => e == "x").length
  );
}

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("XO", function () {
  it("Sample tests", function () {
    tester("xo", true);
    tester("XO", true);
    tester("xxxoo", false);
    tester("xxOo", true);
    tester("", true, "Empty string contains equal amount of x and o");
  });
  const tester = (input, expected, msg) => {
    assert.strictEqual(
      XO(input),
      expected,
      `Failed for input: "${input}"${msg ? "\n\n" + msg : ""}\n`,
    );
  };
});
