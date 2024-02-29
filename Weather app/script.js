const apiKey = "e46f0a2d916907585efae0600f026dde";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serchBox = document.querySelector(".serch input");
const serchBtn = document.querySelector(".serch button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main == "Drizzel") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main == "snow") {
            weatherIcon.src = "snow.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}



serchBtn.addEventListener("click", () => {
    checkWeather(serchBox.value);
})
