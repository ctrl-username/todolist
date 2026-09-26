function todoItem() {
  const todoLists = [];

  class Todo {
    constructor(title, description, dueDate, priority, notes) {
      this.id = crypto.randomUUID();
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.checklist = true;
    }

    toggleChecklist() {
      this.checklist = !this.checklist;
    }
  }

  function createTodo(title, description, date, priority = "low", note) {
    let newItem = new Todo(title, description, date, priority, note);

    newItem.toggleChecklist();

    console.log(newItem.title);
    todoLists.push(newItem);
  }

  createTodo("eat rice", "ni hao shi bu tofu", 9, "high", "wo men ji");
  createTodo("eat rice", "ni hao shi bu tofu", 9, "high", "wo men ji");
  console.log(todoLists);

  return {createTodo}
}
todoItem();
export { todoItem };
