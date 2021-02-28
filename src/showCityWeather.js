import { addCityToHistory } from "./addCityToHistory";

export async function showCityWeather(cityWeather) {
  const weatherDiv = document.querySelector(".weather");
  weatherDiv.innerHTML = "";

  const mapDiv = document.querySelector(".map");
  mapDiv.innerHTML = "";

  const cityName = document.createElement("p");

  if (cityWeather.name === undefined) {
    cityName.innerText = "Can't find this city, try again.";
    weatherDiv.appendChild(cityName);
    return;
  }

  cityName.innerText = `Showing weather for ${cityWeather.name}`;

  weatherDiv.appendChild(cityName);

  const weather = document.createElement("p");
  weather.innerText = `Current weather is ${cityWeather.main.temp} degrees of Celcium`;
  weatherDiv.appendChild(weather);

  const img = document.createElement("img");
  const weatherCode = cityWeather.weather[0].icon;
  img.src = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  weatherDiv.appendChild(img);

  const map = document.createElement("img");
  map.src = `https://static-maps.yandex.ru/1.x/?ll=${cityWeather.coord.lon},${cityWeather.coord.lat}&size=450,450&z=11&l=map`;
  mapDiv.appendChild(map);

  addCityToHistory(cityWeather.name);
}
