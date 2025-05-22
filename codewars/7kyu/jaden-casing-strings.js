/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(String.prototype, "toJadenCase", {
  value: function toJadenCase() {
    return this.split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(" ");
  },
});

describe("Tests", () => {
  const { strictEqual, property, typeOf } = require("chai").assert;

  function doTest(input, expected) {
    const actual = input.toJadenCase();
    strictEqual(actual, expected, `for string "${input}"\n`);
  }

  it("should extend the string prototype", function () {
    property(
      String.prototype,
      "toJadenCase",
      "String.prototype should have a toJadenCase property",
    );
    typeOf(
      String.prototype.toJadenCase,
      "function",
      "toJadenCase should be a function",
    );
  });

  it("sample tests", () => {
    doTest("most trees are blue", "Most Trees Are Blue");
    doTest(
      "How can mirrors be real if our eyes aren't real",
      "How Can Mirrors Be Real If Our Eyes Aren't Real",
    );
  });
});
