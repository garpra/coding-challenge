function duplicateEncode(word) {
  let arr = word.toLowerCase().split("");
  let duplicate = new Set(arr.filter((e, i) => arr.indexOf(e) !== i));
  return arr.map((e) => (duplicate.has(e) ? ")" : "(")).join("");
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"), "(((");
    assert.strictEqual(duplicateEncode("recede"), "()()()");
    assert.strictEqual(
      duplicateEncode("Success"),
      ")())())",
      "should ignore case",
    );
    assert.strictEqual(duplicateEncode("(( @"), "))((");
  });
});
