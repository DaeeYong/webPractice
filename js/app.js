const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.getElementById("greeting");
const HIDDEN_CLASSNAME = "hidden";

function painatGreetings(username){
    greeting.innerText = `User: ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleSubmit(event){
    
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;
    localStorage.setItem("username",username);

    painatGreetings(username);
}

const storedUserName = localStorage.getItem("username");

if(storedUserName === null){
   //console.log("here");
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  //console.log(loginForm);
    loginForm.addEventListener("submit", handleSubmit);
}
else{
    painatGreetings(storedUserName);
}

//-> 7.2

