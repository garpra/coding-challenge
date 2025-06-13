const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  return p1 === p2
    ? "Draw!"
    : rules[p1] === p2
      ? "Player 1 won!"
      : "Player 2 won!";
};

const { expect } = require("chai");

describe("rock paper scissors", function () {
  const getMsg = (n) => `Player ${n} won!`;

  it("player 1 win", function () {
    expect(rps("rock", "scissors")).to.equal(getMsg(1));
    expect(rps("scissors", "paper")).to.equal(getMsg(1));
    expect(rps("paper", "rock")).to.equal(getMsg(1));
  });

  it("player 2 win", function () {
    expect(rps("scissors", "rock")).to.equal(getMsg(2));
    expect(rps("paper", "scissors")).to.equal(getMsg(2));
    expect(rps("rock", "paper")).to.equal(getMsg(2));
  });

  it("draw", function () {
    expect(rps("rock", "rock")).to.equal("Draw!");
    expect(rps("scissors", "scissors")).to.equal("Draw!");
    expect(rps("paper", "paper")).to.equal("Draw!");
  });
});
