const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span);
    span.innerText = newToDo;
    console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(evnet){
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(newToDo);

    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);