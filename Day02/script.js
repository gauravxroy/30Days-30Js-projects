const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

//TODO Add Digital time and day and night Icon ,

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
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    // create for multiple conditions
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/clear-sky.png";
      // weatherIcon.setAttribute("src", "assets/cloudy-day.png");
      // will work same
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.setAttribute("src", "assets/cloudy.png");
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.setAttribute("src", "assets/rain.png");
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.setAttribute("src", "assets/mist.png");
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.setAttribute("src", "assets/haze.png");
    }
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
