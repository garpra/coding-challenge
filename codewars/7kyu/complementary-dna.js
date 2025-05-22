function dnaStrand(dna) {
  let pairs = { A: "T", T: "A", C: "G", G: "C" };
  return dna
    .split("")
    .map((e) => pairs[e])
    .join("");
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

if (typeof dnaStrand != "function") dnaStrand = DNAStrand;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(dnaStrand("AAAA"), "TTTT", "String AAAA is");
    assert.strictEqual(dnaStrand("ATTGC"), "TAACG", "String ATTGC is");
    assert.strictEqual(dnaStrand("GTAT"), "CATA", "String GTAT is");
  });
});
