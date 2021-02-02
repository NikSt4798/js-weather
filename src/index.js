// my key : 458b6f24d9bec1db57c2f337dc35dbcc
(async function () {
  const localWeather = await getLocalWeather();

  await showCityWeather(localWeather);

  const cityButton = document.querySelector("#submit");

  cityButton.addEventListener("click", async () => {
    const cityInput = document.querySelector(".city");
    const weather = await getWeatherByCity(cityInput.value);
    await showCityWeather(weather);
    addCityToHistory(cityInput.value);
  });
})();

export async function showCityWeather(cityWeather) {
  const weatherDiv = document.querySelector(".weather");

  weatherDiv.innerHTML = "";
  const cityName = document.createElement("p");
  cityName.innerText = `Showing weather for ${cityWeather.name}`;

  weatherDiv.appendChild(cityName);

  const weather = document.createElement("p");
  weather.innerText = `Current weather is ${cityWeather.main.temp} degrees of Celcium`;
  weatherDiv.appendChild(weather);

  const img = document.createElement("img");
  const weatherCode = cityWeather.weather[0].icon;
  img.src = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  weatherDiv.appendChild(img);

  const favicon = document.querySelector("#favicon");
  favicon.href = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;

  const mapDiv = document.querySelector(".map");
  mapDiv.innerHTML = "";

  const map = document.createElement("img");
  map.src = `https://static-maps.yandex.ru/1.x/?ll=${cityWeather.coord.lon},${cityWeather.coord.lat}&size=450,450&z=11&l=map`;
  mapDiv.appendChild(map);
}

export async function getWeatherByCity(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  let response = await fetch(url);
  let json = await response.json();

  return json;
}

export async function getLocalWeather() {
  let url = "https://get.geojs.io/v1/ip/geo.json";
  let response = await fetch(url);
  let json = await response.json();

  const lat = json.latitude;
  const lon = json.longitude;
  url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  response = await fetch(url);
  json = await response.json();

  return json;
}

export function addCityToHistory(city) {
  const historyDiv = document.querySelector(".history");

  const paragraphs = historyDiv.querySelectorAll("p");

  let hasThisCity = false;

  paragraphs.forEach((element) => {
    if (element.innerText === city) {
      hasThisCity = true;
      return;
    }
  });

  if (hasThisCity) return;

  const p = document.createElement("p");
  p.innerText = city;

  p.addEventListener("click", async function () {
    const weather = await getWeatherByCity(this.innerText);
    await showCityWeather(weather);
  });

  historyDiv.insertBefore(p, paragraphs[0]);

  if (paragraphs.length > 10) {
    paragraphs[paragraphs.length - 1].remove();
  }
}
