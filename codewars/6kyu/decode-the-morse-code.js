let MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};

decodeMorse = function (morseCode) {
  // return morseCode
  //   .trim("")
  //   .split("   ")
  //   .map((word) =>
  //     word
  //       .split(" ")
  //       .map((char) => MORSE_CODE[char])
  //       .join(""),
  //   )
  //   .join(" ");

  return morseCode
    .trim()
    .split(/  | /)
    .map((morse) => MORSE_CODE[morse] || " ")
    .join("");
};

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample tests", function () {
  it("Example from description", () => {
    assert.strictEqual(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
  });

  it("Leading and trailing spaces", () => {
    assert.strictEqual(decodeMorse("   .... . -.--   "), "HEY");
  });
});
