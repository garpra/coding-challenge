function openOrSenior(data) {
  return data.map((e) => (e[0] >= 55 && e[1] > 7 ? "Senior" : "Open"));
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Fixed tests", () => {
    assert.deepEqual(
      openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
      ]),
      ["Open", "Senior", "Open", "Senior"],
    );
    assert.deepEqual(
      openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [53, 23],
      ]),
      ["Open", "Open", "Open", "Open"],
    );
    assert.deepEqual(
      openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12],
      ]),
      ["Senior", "Open", "Open", "Open"],
    );
  });
});
