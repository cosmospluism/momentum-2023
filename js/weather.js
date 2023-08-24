const API_KEY = "86aec7c9d10bc13524e24895e4fdd4b8";

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        weather.innerText = `${data.weather[0].main}, ${data.main.temp}°C`;
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
    });
};

function onGeoError(){
    alert("Can't find you. No weather for you.")
};