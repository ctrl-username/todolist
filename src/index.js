import { dom, domListener } from "./dom.js";
import { todoItem } from "./todo_item.js";
import "./canvas.css";
localStorage.setItem("project", "{'friend','cookies'}");

domListener();
todoItem();


