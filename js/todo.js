const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteToDo(evnet){
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newToDo;
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(evnet){
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(newToDo);

    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);