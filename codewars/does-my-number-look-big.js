function narcissistic(value) {
  let check = value
    .toString()
    .split("")
    .reduce((acc, e) => {
      return (acc += Math.pow(Number(e), value.toString().length));
    }, 0);

  return value == check;
}

const { assert } = require("chai");

describe("Example tests", function () {
  function dotest(input, expected) {
    const actual = narcissistic(input);
    assert.strictEqual(actual, expected, `Incorrect answer for value=${input}`);
  }

  it("Narcissistic numbers", function () {
    dotest(7, true);
    dotest(153, true);
  });

  it("Not narcissistic numbers", function () {
    dotest(122, false);
    dotest(487, false);
  });
});
