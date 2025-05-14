function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if ((i % 3 == 0) | (i % 5 == 0)) {
      sum += i;
    }
  }
  return sum;
}

const { assert } = require("chai");

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = solution(n);
    assert.strictEqual(actual, expected);
  });
}

describe("basic tests", function () {
  test(10, 23);
});
