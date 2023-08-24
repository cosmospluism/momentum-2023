const todoForm = document.querySelector("#todo-form");
const todoQ = todoForm.querySelector("span");
const todoInput = todoForm.querySelector("input");

const saveTodo = localStorage.getItem("todoText");

todoForm.addEventListener("submit", onSubmit);

function onSubmit(event){
    event.preventDefault();
    const todoText = todoInput.value;
    localStorage.setItem("todoText", todoText);
    changeQ();
    todoInput.classList.add("hidden");
    getText();
}

// problem : text doesn't appear ** , after that i add some transition
function getText() {
    todoInput.innerText = gotText;
}
 
function changeQ() {
    todoQ.innerText = "TODAY";
}