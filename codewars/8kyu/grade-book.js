function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;

  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const { expect } = require("chai");

describe("grade book", function () {
  it("should return an A", function () {
    expect(getGrade(95, 90, 93)).to.equal("A");
    expect(getGrade(100, 85, 96)).to.equal("A");
    expect(getGrade(92, 93, 94)).to.equal("A");
  });

  it("should return a B", function () {
    expect(getGrade(70, 70, 100)).to.equal("B");
    expect(getGrade(82, 85, 87)).to.equal("B");
    expect(getGrade(84, 79, 85)).to.equal("B");
    expect(getGrade(89, 89, 90)).to.equal("B");
  });

  it("should return a C", function () {
    expect(getGrade(70, 70, 70)).to.equal("C");
    expect(getGrade(75, 70, 79)).to.equal("C");
    expect(getGrade(60, 82, 76)).to.equal("C");
  });

  it("should return a D", function () {
    expect(getGrade(65, 70, 59)).to.equal("D");
    expect(getGrade(66, 62, 68)).to.equal("D");
    expect(getGrade(58, 62, 70)).to.equal("D");
  });

  it("should return an F", function () {
    expect(getGrade(44, 55, 52)).to.equal("F");
    expect(getGrade(48, 55, 52)).to.equal("F");
    expect(getGrade(58, 59, 60)).to.equal("F");
  });
});
