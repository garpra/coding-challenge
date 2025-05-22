function getMiddle(s) {
  return s.length % 2 == 0
    ? s
        .split("")
        .splice(s.length / 2 - 1, 2)
        .join("")
    : s
        .split("")
        .splice(s.length / 2, 1)
        .join("");
}

/*
Top Codewars

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
*/

describe("GetMiddle", function () {
  const { assert } = require("chai");

  function doTest(input, expected) {
    const message = `for input ${JSON.stringify(input)}\n`;
    const actual = getMiddle(input);
    assert.strictEqual(actual, expected, message);
  }

  it("Sample Tests", function () {
    doTest("test", "es");
    doTest("testing", "t");
    doTest("middle", "dd");
    doTest("A", "A");
  });
});
