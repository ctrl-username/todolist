function domListener() {
  const container = document.querySelector(".container");

  container.addEventListener("click", (event) => {
    let target = event.target;
    console.log(target.className);
    // if (target.clasName) {
    //   console.log("hello world");
    // }
    const addTodoButton = "add-todo";

    if (
      target.className == addTodoButton ||
      target.className.baseVal == addTodoButton
    ) {
      console.log("you got it");
    }
  });
}

export { domListener };
