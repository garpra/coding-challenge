function findMissingLetter(array) {
  for (let i = 0; i < array.length; i++) {
    const first = array[0].charCodeAt(0);

    if (array[i].charCodeAt(0) !== first + i) {
      return String.fromCharCode(first + i);
    }
  }
}

const { expect } = require("chai");

describe("KataTests", function () {
  it("exampleTests", function () {
    expect(findMissingLetter(["a", "b", "c", "d", "f"])).to.equal("e");
    expect(findMissingLetter(["O", "Q", "R", "S"])).to.equal("P");
  });
});
