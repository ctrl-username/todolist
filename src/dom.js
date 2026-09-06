function dom() {
  const container = document.querySelector(".container");

  container.addEventListener("click", (event) => {
    let target = event.target;
    console.log(target.className);
    if (target.clasName) {
      console.log("hello world");
    }
  });
}

export { dom };
