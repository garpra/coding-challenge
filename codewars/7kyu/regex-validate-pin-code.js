function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

const { expect } = require("chai");

describe("validatePIN", function () {
  it("should return false for pins with length other than 4 or 6", function () {
    expect(validatePIN("1")).to.equal(false, "Wrong output for '1'");
    expect(validatePIN("12")).to.equal(false, "Wrong output for '12'");
    expect(validatePIN("123")).to.equal(false, "Wrong output for '123'");
    expect(validatePIN("12345")).to.equal(false, "Wrong output for '12345'");
    expect(validatePIN("1234567")).to.equal(
      false,
      "Wrong output for '1234567'",
    );
    expect(validatePIN("-1234")).to.equal(false, "Wrong output for '-1234'");
    expect(validatePIN("1.234")).to.equal(false, "Wrong output for '1.234'");
    expect(validatePIN("-1.234")).to.equal(false, "Wrong output for '-1.234'");
    expect(validatePIN("00000000")).to.equal(
      false,
      "Wrong output for '00000000'",
    );
  });

  it("should return false for pins which contain characters other than digits", function () {
    expect(validatePIN("a234")).to.equal(false, "Wrong output for 'a234'");
    expect(validatePIN(".234")).to.equal(false, "Wrong output for '.234'");
  });

  it("should return true for valid pins", function () {
    expect(validatePIN("1234")).to.equal(true, "Wrong output for '1234'");
    expect(validatePIN("0000")).to.equal(true, "Wrong output for '0000'");
    expect(validatePIN("1111")).to.equal(true, "Wrong output for '1111'");
    expect(validatePIN("123456")).to.equal(true, "Wrong output for '123456'");
    expect(validatePIN("098765")).to.equal(true, "Wrong output for '098765'");
    expect(validatePIN("000000")).to.equal(true, "Wrong output for '000000'");
    expect(validatePIN("123456")).to.equal(true, "Wrong output for '123456'");
    expect(validatePIN("090909")).to.equal(true, "Wrong output for '090909'");
  });
});
