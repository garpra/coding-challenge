function alphabetPosition(text) {
  let text_array = text.toLowerCase().split(""),
    alphabet = "abcdefghijklmnopqrstuvwxyz".split(""),
    clean_str = text_array.filter((e) => alphabet.includes(e));
  return clean_str.map((e) => alphabet.indexOf(e) + 1).join(" ");
}

const { expect } = require("chai");

describe("alphabetPosition", () => {
  it("should return correct alphabet positions for given strings", () => {
    expect(alphabetPosition("The sunset sets at twelve o' clock.")).to.equal(
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );

    expect(alphabetPosition("The narwhal bacons at midnight.")).to.equal(
      "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
    );
  });
});
