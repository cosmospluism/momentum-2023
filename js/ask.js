const todoForm = document.getElementById("todo-form");
const todoAsk = todoForm.querySelector(".todo-ask");
const todoInput = todoForm.querySelector("input");
const answerBox = document.getElementById("answer-box");
const answerText = answerBox.querySelector("span:first-child");
const answer = answerBox.querySelector("span:last-child");

let saveTodo = localStorage.getItem("todoText");

// todoForm.addEventListener("submit", onSubmit);

function onSubmit(event){
    event.preventDefault();
    const todoText = todoInput.value;
    localStorage.setItem("todoText", todoText);
    todoAsk.classList.add("hidden");
    todoInput.classList.add("hidden");
    answerText.classList.remove("hidden");
    paintTodo(todoText);
}

function paintTodo(pizza) {
    answer.innerText = pizza;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "x";
    answer.appendChild(removeBtn);
    removeBtn.addEventListener("click", deleteTodo);
}

function deleteTodo() {
    const deleteOne = event.target.parentElement;
    deleteOne.remove();
    localStorage.removeItem("todoText");
}
    
if(saveTodo === null) {
    todoAsk.classList.remove("hidden");
    todoInput.classList.remove("hidden");
    todoForm.addEventListener("submit", onSubmit);
} else {
    paintTodo(saveTodo);
}