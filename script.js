const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTodo() {
    if (todoInput.value === "") {
        alert("Please enter a todo item.");
    } else {
        const li = document.createElement("li");
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    todoInput.value = "";
    saveTodos();
}

todoInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTodos();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTodos();
    }
}, false);

function saveTodos() {
    localStorage.setItem("todos", todoList.innerHTML);
}

function showTodos() {
    todoList.innerHTML = localStorage.getItem("todos");
}
showTodos();

