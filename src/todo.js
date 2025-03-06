class TodoApp {
  constructor() {
    this.todos = [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title, description = "") {
    if (!title) {
      throw new Error("Title is required");
    }
    const newTodo = {
      id: Date.now(), // シンプルなID生成
      title,
      description,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  removeTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new Error("Todo not found");
    }
    return this.todos.splice(index, 1)[0];
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    todo.completed = !todo.completed;
    return todo;
  }

  editTodo(id, newTitle, newDescription) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    if (newTitle) {
      todo.title = newTitle;
    }
    if (newDescription) {
      todo.description = newDescription;
    }
    return todo;
  }
}

module.exports = TodoApp;
