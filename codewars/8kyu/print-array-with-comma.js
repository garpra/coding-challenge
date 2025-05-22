function printArray(array) {
  return array.join(",");
}

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    var data = [2, 4, 5, 2];
    assert.strictEqual(printArray(data), "2,4,5,2", "int test failed");
  });
});
