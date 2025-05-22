function tribonacci(signature, n) {
  let tribonacci = signature.slice(0, n);
  let i = 3;

  while (i < n) {
    tribonacci[i] = tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i - 3];
    i++;
  }

  return tribonacci;

  // let result = signature.slice(0, n);
  // while (result.length < n) {
  //   result.push(result.slice(-3).reduce((acc, curr) => acc + curr, 0));
  // }
  //
  // return result;
}

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("Basic tests", function () {
  function doTest(input, expected) {
    let [sig, len] = input;
    it(`Testing signature=[${sig}], n=${len}`, () => {
      assert.deepEqual(tribonacci(sig, len), expected);
    });
  }

  doTest([[1, 1, 1], 10], [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
  doTest([[0, 0, 1], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  doTest([[0, 1, 1], 10], [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
  doTest([[1, 0, 0], 10], [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
  doTest([[0, 0, 0], 10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  doTest([[1, 2, 3], 10], [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
  doTest([[3, 2, 1], 10], [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
  doTest([[1, 1, 1], 1], [1]);

  doTest([[300, 200, 100], 0], []);
});
