const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");

let todos = [];

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
};

function paintTodo(tomato){
    const makeList = document.createElement("li");
    makeList.id = tomato.id;
    const span = document.createElement("span");
    span.innerText = tomato.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    makeList.appendChild(span);
    makeList.appendChild(button);
    todoList.appendChild(makeList);
};

function deleteTodo() {
    const deleteOne = event.target.parentElement;
    deleteOne.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(deleteOne.id));
    saveTodos();
};

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
};

todoForm.addEventListener("submit", todoSubmit);

const savedList = localStorage.getItem("todos");

if(savedList !== null) {
    const parsedTodos = JSON.parse(savedList);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}