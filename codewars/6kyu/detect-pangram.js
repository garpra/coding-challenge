function isPangram(string) {
  // string = string.toLowerCase();
  // for (let char = 97; char <= 122; char++) {
  //   if (!string.includes(String.fromCharCode(char))) {
  //     return false;
  //   }
  // }
  //
  // return true;

  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((e) => string.includes(e));
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog.";
    assert.strictEqual(isPangram(string), true);
  });
  it("test2", () => {
    var string = "This is not a pangram.";
    assert.strictEqual(isPangram(string), false);
  });
});
