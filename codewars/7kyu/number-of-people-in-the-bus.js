var number = function (busStops) {
  // let a = 0,
  //   b = 0;
  // busStops.forEach((e) => {
  //   a += e[0];
  //   b += e[1];
  // });
  //
  // return a - b;
  return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
};

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      number([
        [10, 0],
        [3, 5],
        [5, 8],
      ]),
      5,
    );
    assert.strictEqual(
      number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
      ]),
      17,
    );
    assert.strictEqual(
      number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
      ]),
      21,
    );
    assert.strictEqual(number([[0, 0]]), 0);
  });
});
