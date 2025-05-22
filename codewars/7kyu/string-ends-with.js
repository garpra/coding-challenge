function solution(str, ending) {
  return ending != "" ? str.slice(-ending.length) === ending : true;
}

const { expect } = require("chai");

describe("Tests", () => {
  it("should return true if the string ends with the given substring", () => {
    expect(solution("abcde", "cde")).to.equal(true);
    expect(solution("abcde", "abc")).to.equal(false);
    expect(solution("abc", "")).to.equal(true);
  });
});
