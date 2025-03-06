// __tests__/todo.test.js
const TodoApp = require("../src/todo");

describe("TodoApp Demo", () => {
  let app;

  beforeEach(() => {
    // テスト毎に新しいインスタンスを生成して状態を初期化
    app = new TodoApp();
  });

  test("初期状態ではタスクが存在しない", () => {
    expect(app.getTodos()).toEqual([]);
  });

  test("タスクの追加ができ、デフォルトで完了状態は false", () => {
    const title = "買い物リストを作成";
    const description = "牛乳、パン、卵";
    const todo = app.addTodo(title, description);

    expect(todo.title).toBe(title);
    expect(todo.description).toBe(description);
    expect(todo.completed).toBe(false);
    expect(app.getTodos().length).toBe(1);
  });

  test("タスク追加時、タイトルがない場合はエラーを投げる", () => {
    expect(() => {
      app.addTodo("");
    }).toThrow("Title is required");
  });

  test("タスクをIDで削除できる", () => {
    const todo1 = app.addTodo("タスク1");
    const todo2 = app.addTodo("タスク2");

    expect(app.getTodos().length).toBe(2);

    const removedTodo = app.removeTodo(todo1.id);
    expect(removedTodo).toEqual(todo1);
    expect(app.getTodos().length).toBe(1);
    expect(app.getTodos()[0]).toEqual(todo2);
  });

  test("存在しないタスクを削除しようとするとエラーとなる", () => {
    expect(() => app.removeTodo(999)).toThrow("Todo not found");
  });

  test("タスクの完了状態をトグルできる", () => {
    const todo = app.addTodo("タスク");
    expect(todo.completed).toBe(false);

    const toggledTodo = app.toggleTodo(todo.id);
    expect(toggledTodo.completed).toBe(true);

    // もう一度トグルすると false に戻る
    const toggledAgainTodo = app.toggleTodo(todo.id);
    expect(toggledAgainTodo.completed).toBe(false);
  });

  test("存在しないタスクの状態トグルはエラーとなる", () => {
    expect(() => app.toggleTodo(999)).toThrow("Todo not found");
  });

  test("タスクのタイトルと詳細を編集できる", () => {
    const todo = app.addTodo("旧タイトル", "旧詳細");
    const updatedTodo = app.editTodo(todo.id, "新タイトル", "新詳細");

    expect(updatedTodo.title).toBe("新タイトル");
    expect(updatedTodo.description).toBe("新詳細");
  });

  test("存在しないタスクの編集はエラーとなる", () => {
    expect(() => app.editTodo(999, "タイトル", "詳細")).toThrow(
      "Todo not found"
    );
  });
});
