function bmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const { assert } = require("chai");

describe("BMI tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(
      bmi(50, 1.8),
      "Underweight",
      "For weight = 50 and height = 1.80",
    );
    assert.strictEqual(
      bmi(80, 1.8),
      "Normal",
      "For weight = 80 and height = 1.80",
    );
    assert.strictEqual(
      bmi(90, 1.8),
      "Overweight",
      "For weight = 90 and height = 1.80",
    );
    assert.strictEqual(
      bmi(100, 1.8),
      "Obese",
      "For weight = 100 and height = 1.80",
    );
  });
});
