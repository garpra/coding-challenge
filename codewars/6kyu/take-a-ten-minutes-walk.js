function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let x = 0,
    y = 0;

  walk.forEach((e) => {
    if (e == "n") y++;
    if (e == "s") y--;
    if (e == "e") x++;
    if (e == "w") x--;
  });

  return x == 0 && y == 0;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    assert.isTrue(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
      "should return true"
    );
    assert.isFalse(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
      "should return false"
    );
    assert.isFalse(isValidWalk(["w"]), "should return false");
    assert.isFalse(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
      "should return false"
    );
  });
});
