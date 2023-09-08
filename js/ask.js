const todoForm = document.getElementById("todo-form");
const todoAsk = todoForm.querySelector(".todo-ask");
const todoInput = todoForm.querySelector("input");
const answerBox = document.getElementById("answer-box");
const answerText = answerBox.querySelector("span:first-child");
const answer = answerBox.querySelector("span:last-child");

let saveTodo = localStorage.getItem("todoText");

function onSubmit(event){
    event.preventDefault();
    const todoText = todoInput.value;
    todoInput.value = "";
    localStorage.setItem("todoText", todoText);
    todoAsk.classList.add("hidden");
    todoInput.classList.add("hidden");
    paintTodo(todoText);
}

function paintTodo(pizza) {
    answer.innerText = pizza;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "x";
    answer.appendChild(removeBtn);
    answerText.classList.remove("hidden");
    answer.classList.remove("hidden");
    removeBtn.addEventListener("click", deleteTodo);
}

function deleteTodo() {
    const deleteOne = event.target.parentElement;
    deleteOne.remove();
    localStorage.removeItem("todoText");
    answerText.classList.add("hidden");
}
    
if(saveTodo === null) {
    todoForm.addEventListener("submit", onSubmit);
} else {
    todoAsk.classList.add("hidden");
    todoInput.classList.add("hidden");
    paintTodo(saveTodo);
}