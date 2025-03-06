const sumStringNumbers = require('../src/sumStringNumbers');

describe("sumStringNumbers 関数のテスト", () => {
  test("空文字の場合、0 を返す", () => {
    expect(sumStringNumbers("")).toBe(0);
  });

  test("1つの数字の場合、その数字を返す", () => {
    expect(sumStringNumbers("5")).toBe(5);
  });

  test("カンマ区切りの数字の場合、合計を返す", () => {
    expect(sumStringNumbers("1,2")).toBe(3);
  });

  test("複数の数字の場合、合計を返す", () => {
    expect(sumStringNumbers("1,2,3,4")).toBe(10);
  });

  // 将来的に追加するケースとして、以下のようなテストも考えられる
  // test("改行も区切り文字として扱う場合、合計を返す", () => {
  //   expect(sumStringNumbers("1\n2,3")).toBe(6);
  // });

  // test("負の数字が入力された場合、エラーをスローする", () => {
  //   expect(() => sumStringNumbers("1,-2,3")).toThrow("負の数字は許可されていません");
  // });
});
