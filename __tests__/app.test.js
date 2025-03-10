/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");

describe("UIテスト", () => {
  beforeEach(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../src/index.html"),
      "utf8"
    );
    document.documentElement.innerHTML = html;
    require("../src/app.js");
    // DOMContentLoaded イベントを手動で発火させる
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  afterEach(() => {
    jest.resetModules();
  });

  test("ボタンをクリックするとテキストが更新される", () => {
    const button = document.getElementById("myButton");
    const output = document.getElementById("output");
    // ボタンクリックをシミュレート
    button.click();
    expect(output.textContent).toBe("Button was clicked!");
  });
});
