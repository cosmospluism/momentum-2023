const todoForm = document.querySelector("#todo-form");
const todoQ = todoForm.querySelector("span");
const todoInput = todoForm.querySelector("input");
const answer = todoForm.querySelector(".answer");

const saveTodo = localStorage.getItem("todoText");

function onSubmit(event){
    event.preventDefault();
    const todoText = todoInput.value;
    localStorage.setItem("todoText", todoText);
    todoQ.innerText = "TODAY";
    todoInput.classList.add("hidden");
    appearTodo(todoText);
}

function appearTodo(pizza) {
    answer.innerText = pizza;
    answer.classList.remove("hidden");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "x";
    answer.appendChild(removeBtn);
}
    
if(saveTodo === null) {
    todoQ.innerText = "What is your plan for today?";
    answer.classList.add("hidden");
    todoInput.classList.remove("hidden");
    todoForm.addEventListener("submit", onSubmit);
} else {
    todoInput.classList.add("hidden");
    appearTodo(saveTodo);
}

todoForm.addEventListener("submit", onSubmit);