// create project
//\]]
//
//

function todoProjects() {
  let projects = [];
  class Project {
    constructor(name) {
      this.id = crypto.randomUUID();
      this.name = name;
      this.todos = [];
    }

    addTodo(todo) {
      this.todos.push(todo);
    }

    removeTodo(todo) {
      // this.todos.pop(todo)
      //
    }
  }

  const createProject = (project) => {
    let newProject = new Project(project);

    projects.push(newProject);
    return newProject;
  };

  const defaultProject = createProject("general");

  createProject("general");

  console.log(defaultProject.id);
}

todoProjects();



export {todoProjects}
