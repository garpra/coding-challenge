function order(words) {
  // words = words.split(" ");
  // let sort = [];
  //
  // words.forEach((e) => {
  //   for (let i = 1; i <= words.length; i++) {
  //     if (e.includes(i)) {
  //       sort[i - 1] = e;
  //     }
  //   }
  // });
  //
  // return sort.join(" ");

  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}

const { assert } = require("chai");

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.strictEqual(
      order("4of Fo1r pe6ople g3ood th5e the2"),
      "Fo1r the2 g3ood 4of th5e pe6ople",
    );
    assert.strictEqual(order(""), "", "empty input should return empty string");
  });
});
