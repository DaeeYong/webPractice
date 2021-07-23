const API_KEY = "b3e8a290fe6eef6b45a8e69b195d5f5f";
function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log("you live in",latitude, longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        //console.log(data.name, data.weather[0].main);
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

    });

}

function onGeoError(){
    alert("Cant't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

