const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const citySearch = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const cityValue = citySearch.value; // if getting value here then its throwing undefined

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    // create for multiple conditions
    //   if (data.weather[0].main == "Clear") {
    //     weatherIcon.src = "assets/cloudy-day.png";
    //     // weatherIcon.setAttribute("src", "assets/cloudy-day.png");
    //     // will work same
    //   }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block"; // changing the display from none to block when entering city name
  }
}

// citySearch is focused and when pressed entered the function is called
citySearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(citySearch.value);
  }
});

// function is called whenever the button is clicked
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkWeather(citySearch.value);
});
