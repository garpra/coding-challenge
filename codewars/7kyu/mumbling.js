function accum(s) {
  return s
    .split("")
    .map((e, i) => {
      let word = "";
      for (let j = 0; j < i + 1; j++) {
        word += e;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("-");
}

const { expect } = require("chai");

describe("accum", function () {
  it("Basic tests", function () {
    expect(accum("ZpglnRxqenU")).to.equal(
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu",
    );

    expect(accum("NyffsGeyylB")).to.equal(
      "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb",
    );

    expect(accum("MjtkuBovqrU")).to.equal(
      "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu",
    );

    expect(accum("EvidjUnokmM")).to.equal(
      "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm",
    );

    expect(accum("HbideVbxncC")).to.equal(
      "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc",
    );
  });
});
