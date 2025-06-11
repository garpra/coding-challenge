function humanReadable(seconds) {
  // let s = 0,
  //   m = 0,
  //   h = 0;
  //
  // if (seconds >= 3600) {
  //   h = Math.floor(seconds / 3600);
  //   seconds -= h * 3600;
  // }
  //
  // if (seconds >= 60) {
  //   m = Math.floor(seconds / 60);
  //   seconds -= m * 60;
  // }
  //
  // s = seconds;
  // return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

  const h = Math.floor(seconds / 3600),
    m = Math.floor((seconds % 3600) / 60),
    s = seconds % 60;

  return [h, m, s].map((e) => String(e).padStart(2, "0")).join(":");
}

describe("tests", function () {
  const { strictEqual } = require("chai").assert;

  function doTest(seconds, expected) {
    const actual = humanReadable(seconds);
    strictEqual(actual, expected, `for ${seconds} seconds\n`);
  }

  it("sample tests", function () {
    doTest(0, "00:00:00");
    doTest(59, "00:00:59");
    doTest(60, "00:01:00");
    doTest(90, "00:01:30");
    doTest(3599, "00:59:59");
    doTest(3600, "01:00:00");
    doTest(45296, "12:34:56");
    doTest(86399, "23:59:59");
    doTest(86400, "24:00:00");
    doTest(359999, "99:59:59");
  });
});
