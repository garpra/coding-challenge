function createPhoneNumber(numbers) {
  // let first = numbers.splice(0, 3).join(""),
  //   second = numbers.splice(0, 3).join(""),
  //   third = numbers.join("");
  //
  // return `(${first}) ${second}-${third}`;

  // Cara Lain
  let format = "(xxx) xxx-xxxx";

  numbers.forEach((e, i) => {
    format = format.replace("x", e);
  });

  return format;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890",
    );
    assert.strictEqual(
      createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      "(111) 111-1111",
    );
    assert.strictEqual(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890",
    );
  });
});
