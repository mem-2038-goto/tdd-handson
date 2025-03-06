const janken = require("../src/janken");

describe("じゃんけんゲームのテスト", () => {
  test("同じ数字を入力した場合は引き分けとなる", () => {
    const outcome = janken(1, 1);
    expect(outcome.result).toBe("draw");
    expect(outcome.userHand).toBe("グー");
    expect(outcome.computerHand).toBe("グー");
  });

  test("ユーザーがグー (1) でコンピューターがチョキ (2) の場合、ユーザーの勝ちとなる", () => {
    const outcome = janken(1, 2);
    expect(outcome.result).toBe("win");
    expect(outcome.userHand).toBe("グー");
    expect(outcome.computerHand).toBe("チョキ");
  });

  test("ユーザーがチョキ (2) でコンピューターがパー (3) の場合、ユーザーの勝ちとなる", () => {
    const outcome = janken(2, 3);
    expect(outcome.result).toBe("win");
    expect(outcome.userHand).toBe("チョキ");
    expect(outcome.computerHand).toBe("パー");
  });

  test("ユーザーがパー (3) でコンピューターがグー (1) の場合、ユーザーの勝ちとなる", () => {
    const outcome = janken(3, 1);
    expect(outcome.result).toBe("win");
    expect(outcome.userHand).toBe("パー");
    expect(outcome.computerHand).toBe("グー");
  });

  test("反対に、ユーザーがグー (1) でコンピューターがパー (3) の場合、ユーザーは負けとなる", () => {
    const outcome = janken(1, 3);
    expect(outcome.result).toBe("lose");
    expect(outcome.userHand).toBe("グー");
    expect(outcome.computerHand).toBe("パー");
  });

  test("無効な入力があった場合、エラーをスローする", () => {
    expect(() => janken(4, 1)).toThrow("無効な入力");
    expect(() => janken(1, 0)).toThrow("無効な入力");
    expect(() => janken("a", 2)).toThrow("無効な入力");
  });
});
