const todos = [
  "Walk dog",
  "Do laundry",
  "Call mom",
  "Finish paper",
  "Code a small project",
  "Read docs",
  "Grab food",
  "Go to the post office",
];

const button = document.querySelector(".show-todos"); // the class list was missing a character
const todoList = document.querySelector(".todos"); // the QuerySelector was capitalized at the beginning

const showTodos = function () {
  // todos does not need to be added to the parameters becuase it is already defined as an array.
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.innerHTML = todo; // no brackets needed.
    todoList.append(li);
  });
  todoList.classList.remove("hide");
  button.innerText = "Hide To-Dos";
};

button.addEventListener("click", function () {
  if (todoList.classList.contains("hide")) {
    showTodos(); // array name todos is not missing. the link is "todos" inside the function body of showTodos/
  } else {
    button.innerText = "Show me!";
    todoList.classList.add("hide");
    todoList.innerHTML = "";
  }
});
