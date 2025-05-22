function getCount(str) {
  return str.split("").filter((e) => "aiueo".includes(e)).length;
}

const { assert } = require("chai");

describe("Vowels Count Tests", function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });
});
