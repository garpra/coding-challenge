function repeatStr(n, s) {
  return s.repeat(n);
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", function () {
  it("Basic tests", function () {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    assert.strictEqual(repeatStr(0, ""), "");
    assert.strictEqual(repeatStr(0, "I"), "");
    assert.strictEqual(repeatStr(5, ""), "");
    assert.strictEqual(repeatStr(6, "I"), "IIIIII");
    assert.strictEqual(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");
  });
});
