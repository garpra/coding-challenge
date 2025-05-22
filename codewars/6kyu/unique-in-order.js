var uniqueInOrder = function (iterable) {
  // iterable = typeof iterable == "string" ? iterable.split("") : iterable;
  // return iterable.filter((e, i) => e !== iterable[i + 1]);
  //
  // iterable = typeof iterable == "string" ? iterable.split("") : iterable;
  // return iterable.filter((e, i) => e !== iterable[i - 1]);

  return [...iterable].filter((e, i) => e !== iterable[i - 1]);
};

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder("AAAABBBCCDAABBB"), [
      "A",
      "B",
      "C",
      "D",
      "A",
      "B",
    ]);
    assert.deepEqual(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
    assert.deepEqual(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
  });
});
