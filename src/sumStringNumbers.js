// ここに実装を書いて、 __tests__/sumStringNumbers.test.js のテストをパスできるようにしてください。
// ※TDDのRedフェーズ後、Greenフェーズに向けて実装を追加する場所です。

function sumStringNumbers(str) {
  if (str === "") {
    return 0;
  }
  const numbers = str.split(/,|\n/).map(Number);
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error("負の数字は許可されていません");
  }
  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = sumStringNumbers;
