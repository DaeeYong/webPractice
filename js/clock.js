const clock = document.querySelector("#clock");

//2초마다 실행
function sayHello(){
    console.log("hello");
}
function getClock(){
    const date = new Date();
    const dateHour = String(date.getHours()).padStart(2, "0");
    const dateMin = String(date.getMinutes()).padStart(2, "0");
    const dateSecond = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${dateHour}:${dateMin}:${dateSecond}`;
}
getClock();
setInterval(getClock, 100); //func, ms (realtime every per 100ms)
//setTimeout(sayHello, 5000);
