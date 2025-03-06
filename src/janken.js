function janken(userChoice, computerChoice) {
  const validChoices = [1, 2, 3];
  if (
    !validChoices.includes(userChoice) ||
    !validChoices.includes(computerChoice)
  ) {
    throw new Error("無効な入力");
  }

  const handMap = {
    1: "グー",
    2: "チョキ",
    3: "パー",
  };

  const userHand = handMap[userChoice];
  const computerHand = handMap[computerChoice];

  let result;
  if (userChoice === computerChoice) {
    result = "draw";
  } else if (
    (userChoice === 1 && computerChoice === 2) ||
    (userChoice === 2 && computerChoice === 3) ||
    (userChoice === 3 && computerChoice === 1)
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  return {
    userHand,
    computerHand,
    result,
  };
}

module.exports = janken;
