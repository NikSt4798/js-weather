// my key : 458b6f24d9bec1db57c2f337dc35dbcc

(async function () {
  const localWeather = await getLocalWeather();

  const div = document.querySelector(".weather");

  await showCityWeather(div, localWeather);

  const cityButton = document.querySelector("#submit");
  // console.log(cityButton);

  cityButton.addEventListener("click", async () => {
    const cityInput = document.querySelector(".city");
    const weather = await getWeatherByCity(cityInput.value);
    await showCityWeather(div, weather);
  });
})();

export async function showCityWeather(element, cityWeather) {
  element.innerHTML = "";
  const cityName = document.createElement("p");
  cityName.innerText = `Showing weather for ${cityWeather.name}`;

  // console.log(cityName);
  element.appendChild(cityName);

  const weather = document.createElement("p");
  weather.innerText = `Current weather is ${cityWeather.main.temp} degrees of Celcium`;
  // console.log(weather);
  element.appendChild(weather);

  const img = document.createElement("img");
  const weatherCode = cityWeather.weather[0].icon;
  img.src = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
  // console.log(img);
  element.appendChild(img);

  const favicon = document.querySelector("#favicon");
  favicon.href = `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
}

export async function getWeatherByCity(cityName) {
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  let response = await fetch(url);
  let json = await response.json();

  // console.log(json);
  return json;
}

export async function getLocalWeather() {
  let url = "https://get.geojs.io/v1/ip/geo.json";
  let response = await fetch(url);
  let json = await response.json();
  // console.log(json);

  const lat = json.latitude;
  const lon = json.longitude;
  url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=458b6f24d9bec1db57c2f337dc35dbcc`;
  response = await fetch(url);
  json = await response.json();

  // console.log(json);
  return json;
}
