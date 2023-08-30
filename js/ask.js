const todoForm = document.querySelector("#todo-form");
const todoQ = todoForm.querySelector("span");
const todoInput = todoForm.querySelector("input");
const answer = todoForm.querySelector(".answer");

let saveTodo = localStorage.getItem("todoText");

function onSubmit(event){
    event.preventDefault();
    const todoText = todoInput.value;
    localStorage.setItem("todoText", todoText);
    todoQ.innerText = "TODAY";
    todoInput.value = "";
    todoInput.classList.add("hidden");
    appearTodo(todoText);
}

function appearTodo(pizza) {
    answer.innerText = pizza;
    answer.classList.remove("hidden");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "x";
    answer.appendChild(removeBtn);
    removeBtn.addEventListener("click", deleteTodo);
}

function deleteTodo() {
    // const removeOne = event.target.parentElement;
    // removeOne.remove();
    // todoQ.innerText = "What is your plan for today?";
    // answer.classList.add("hidden");
    // todoInput.classList.remove("hidden");
}
    
if(saveTodo === null) {
    // todoQ.innerText = "What is your plan for today?";
    // todoInput.classList.remove("hidden");
    answer.classList.add("hidden");
    todoForm.addEventListener("submit", onSubmit);
} else {
    todoInput.classList.add("hidden");
    todoQ.innerText = "TODAY";
    appearTodo(saveTodo);
}