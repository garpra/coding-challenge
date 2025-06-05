function findAverage(array) {
  return array.reduce((a, b) => a + b, 0) / array.length || 0;
}

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("findAverage", () => {
  it("Testing for sample tests", () => {
    tester([1, 1, 1], 1);
    tester([1, 2, 3], 2);
    tester([1, 2, 3, 4], 2.5);
  });

  const tester = (input, expected) => {
    const tolerance = 1e-10;
    const err_msg = `Failed for input: ${JSON.stringify(input)}\n`;
    const actual = findAverage(input);
    assert.approximately(actual, expected, tolerance, err_msg);
  };
});
