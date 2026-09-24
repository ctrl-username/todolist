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
      this.checklist = true

    }

    toggleChecklist() {

      this.checklist = !this.checklist;
    }
  }

  function createTodo() {
    let newItem = new Todo(
      "eat rice",
      "remember to eat",
      10,
      "low",
      "hmm no note",
    );

    newItem.toggleChecklist();

    console.log(newItem.title);
    todoLists.push(newItem);

    console.table(todoLists);
  }

  createTodo();
}
todoItem()
export { todoItem };
