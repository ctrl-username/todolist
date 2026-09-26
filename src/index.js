import { dom, domListener } from "./dom.js";
import { todoItem } from "./todo_item.js";
import {todoProjects} from "./todo_projects.js"
import "./canvas.css";
localStorage.setItem("project", "{'friend','cookies'}");

domListener();
todoItem();

todoItem.createTodo("eat rice", "ni hao shi bu tofu", 9, "high", "wo men ji");
