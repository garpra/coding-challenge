function moveZeros(arr) {
  let arr0 = arr.filter((e) => e !== 0);
  return arr0.concat(Array(arr.length - arr0.length).fill(0));
}

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(
      moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
      [1, 2, 1, 1, 3, 1, 0, 0, 0, 0],
    );
  });
});
