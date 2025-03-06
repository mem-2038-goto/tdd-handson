// この実装は、__tests__/sumStringNumbers.test.js のテストをパスするための実装です。
// テストケース:
// 1. 空文字の場合、0 を返す
// 2. 1つの数字の場合、その数字を返す
// 3. カンマ区切りの数字の場合、合計を返す
// 4. 複数の数字の場合、合計を返す

function sumStringNumbers(input) {
  // 入力が空文字の場合は 0 を返す
  if (input === "") return 0;

  // カンマで分割し、各要素を数値に変換した上で合計する
  return input
    .split(',')
    .map(numStr => Number(numStr))
    .reduce((sum, num) => sum + num, 0);
}

module.exports = sumStringNumbers;
