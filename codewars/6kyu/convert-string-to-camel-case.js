function toCamelCase(str) {
  str = str.replace(/[^A-Za-z]/g, " ").split(" ");
  return str
    .map((e, i) => (i != 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e))
    .join("");
}

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned",
    );
    assert.strictEqual(
      toCamelCase("the_stealth_warrior"),
      "theStealthWarrior",
      "toCamelCase('the_stealth_warrior') did not return correct value",
    );
    assert.strictEqual(
      toCamelCase("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "toCamelCase('The-Stealth-Warrior') did not return correct value",
    );
    assert.strictEqual(
      toCamelCase("A-B-C"),
      "ABC",
      "toCamelCase('A-B-C') did not return correct value",
    );
  });
});
