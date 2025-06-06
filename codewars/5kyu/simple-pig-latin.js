function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      /^[a-zA-Z]/g.test(word) ? word.slice(1) + word.charAt(0) + "ay" : word,
    )
    .join(" ");
}
const { expect } = require("chai");

describe("Tests", () => {
  it("should convert sentence to Pig Latin", () => {
    expect(pigIt("Pig latin is cool")).to.equal("igPay atinlay siay oolcay");
    expect(pigIt("This is my string")).to.equal("hisTay siay ymay tringsay");
  });
});
